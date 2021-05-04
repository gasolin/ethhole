// deno run --allow-net --allow-write fetch_data.js --key [COVALENT_API_KEY]
// get covalent API key from https://www.covalenthq.com/platform/#/auth/register/
import { parse } from 'https://deno.land/std/flags/mod.ts'
import { Timeout } from "https://deno.land/x/timeout/mod.ts"

import { ETH_BRIDGE_CONTRACTS } from '../src/data/bridge_contracts.js'
import { writeJson } from './write_data.js'
const { args, exit } = Deno

const ICON_URL_MAP = {
  'BADGER': 'https://logos.covalenthq.com/tokens/0x3472a5a71965499acd81997a54bba8d852c6e53d.png',
  'BALANCER': 'https://logos.covalenthq.com/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
  'DAI': 'https://logos.covalenthq.com/tokens/0x6b175474e89094c44da98b954eedeac495271d0f.png',
  'SUSHISWAP': 'https://logos.covalenthq.com/tokens/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png',
  'SYNTHETIX': 'https://logos.covalenthq.com/tokens/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f.png',
  'UNISWAP': 'https://logos.covalenthq.com/tokens/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png',
  'USDC': 'https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
  'USDT': 'https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
}

// parse args
const { key = '', quote = 'eth' } = parse(args)
if (!key) {
  console.error(`Please provide covalent API with --key\n
  ex: deno run --allow-net --allow-write fetch_data.js --key [COVALENT_API_KEY]`)
  exit(1)
}

// form the query
const options = {
  key: key,
  'quote-currency': quote,
}
const params = Object.keys(options).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`).join('&')
const projects = Object.keys(ETH_BRIDGE_CONTRACTS)

// collect contracts
const addrInfo = {}
const addrProtocol = {}
const addrStaked = {}
Array.from(new Set(projects
  .map(project => ETH_BRIDGE_CONTRACTS[project]?.bridges.map(entry => {
    addrInfo[entry.address] = {project: project, name: entry.name || '', chainId: entry.chainId}
    if (entry.protocol) {
      addrProtocol[entry.address] = entry
    }
    if (entry['staked-balance']) {
      addrStaked[entry['staked-balance']] = entry
    }
    return entry.address
  }))
  .flat(1)
))
// console.log('contracts %O', addrInfo)

const getBalanceURL = (address, chainId = 1) => `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?${params}`
const ZAPPER_API_KEY = '96e0cc51-a62e-42ca-acee-910ea7d2a241'
const getStackedBalanceURL = (address) => `https://api.zapper.fi/v1/staked-balance/gauge?addresses%5B%5D=${address}&network=ethereum&api_key=${ZAPPER_API_KEY}`
const getProtocolBalanceURL = (address, protocol) => `https://api.zapper.fi/v1/protocols/${protocol}/balances?addresses%5B%5D=${address}&network=ethereum&api_key=${ZAPPER_API_KEY}`

const QUOTE_THRESHOLD = 0.1

// main
async function main() {
  try {
    console.log('Get ethereum price...')
    const ethPrice = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    const collectData = await ethPrice.json()
    const price = collectData.ethereum.usd

    const addrs = Object.keys(addrInfo)
    for (const addr of addrs) {
      const proj = addrInfo[addr].project
      console.log('process ', proj, addrInfo[addr].name)
      let tvl = 0
      let dataset
      if (!addrStaked[addr]) {
        // multi-chain support
        const link = getBalanceURL(addr, addrInfo[addr].chainId)
        const res = await fetch(link)
        const data = await res.json()
        // calc per bridge tvl
        data.data.items = data.data.items
          .filter(token => token.quote > QUOTE_THRESHOLD)
          .map(token => {
            // console.log('tvl of ', bridge.address)
            tvl += token.quote
            return token
          })
        // protocol balance
        if (addrProtocol[addr]) {
          const protocols = addrProtocol[addr].protocol
          for (let i = 0; i < protocols.length; i++) {
            const protocol = protocols[i]
            console.log('> process protocol ', protocol.toUpperCase())
            const resProto = await fetch(getProtocolBalanceURL(addr, protocol))
            const protoDict = await resProto.json()
            const protoData = protoDict[addr.toLowerCase()]
            const quote = protoData.meta[0].value / price
            tvl += quote
            const SYM = protocol.toUpperCase()
            const token = {
              contract_ticker_symbol: SYM,
              contract_address: '',
              logo_url: ICON_URL_MAP[SYM] || undefined,
              quote,
              type: 'protocol'
            }
            // console.log('%O', token)
            data.data.items.push(token)
          }
        }
        console.log(tvl)
        data.data.tvl = tvl
        dataset = data.data
      } else { // fetch stake balance
        console.log('staked balance')
        const stakeRes = await fetch(getStackedBalanceURL(addr))
        const stakeDict = await stakeRes.json()
        const stakeData = stakeDict[addr.toLowerCase()][0]
        // console.log('>>> %O', stakeData)
        const procData = {
          address: addr,
          quote_currency:"ETH",
          chain_id: 1,
          items: stakeData.tokens.map(token => {
            const quote = token.balanceUSD / price
            tvl += quote
            return {
              contract_ticker_symbol: token.symbol,
              contract_address: token.address,
              quote,
              logo_url: ICON_URL_MAP[token.symbol] || undefined,
              type: 'stake'
            }
          })
        }
        dataset = {
          ...procData,
          tvl,
        }
      }
      if (!collectData[proj]) {
        collectData[proj] = {}
        collectData[proj].bridges = [dataset]
      } else {
        collectData[proj].bridges.push(dataset)
      }

      // to not brute the API limit
      await Timeout.wait(200)
    }

    // calc tvl per project
    projects
      .map(project => {
        let tvl = 0
        console.log('tvl of ', project)
        collectData[project].bridges.map(bridge => {
          tvl += bridge.tvl
          return ''
        })
        console.log(tvl)
        collectData[project].tvl = tvl
        return ''
      })

    writeJson(collectData)
  } catch (e) {
    console.error(e.message)
  }
}

main()
