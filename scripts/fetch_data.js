// deno run --allow-net --allow-write fetch_data.js --key [COVALENT_API_KEY]
// get covalent API key from https://www.covalenthq.com/platform/#/auth/register/
import { parse } from 'https://deno.land/std/flags/mod.ts'
import { Timeout } from "https://deno.land/x/timeout/mod.ts"

import { ETH_BRIDGE_CONTRACTS } from '../src/data/bridge_contracts.js'
import { writeJson } from './write_data.js'
const { args, exit } = Deno

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
Array.from(new Set(projects
  .map(project => ETH_BRIDGE_CONTRACTS[project]?.bridges.map(entry => {
    addrInfo[entry.address] = {project: project, name: entry.name || '', chainId: entry.chainId}
    return entry.address
  }))
  .flat(1)
))
// console.log('contracts %O', addrInfo)

const getBalanceURL = (address, chainId = 1) => `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?${params}`

// main
async function main() {
  try {
    console.log('Get ethereum price...')
    const ethPrice = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    const collectData = await ethPrice.json()

    const addrs = Object.keys(addrInfo)
    for (const addr of addrs) {
      // multi-chain support
      const link = getBalanceURL(addr, addrInfo[addr].chainId)
      const res = await fetch(link)
      const data = await res.json()

      const proj = addrInfo[addr].project
      console.log('process ', proj, addrInfo[addr].name)
      if (!collectData[proj]) {
        collectData[proj] = {}
        collectData[proj].bridges = [data.data]
      } else {
        collectData[proj].bridges.push(data.data)
      }
      // to not brute the API limit
      await Timeout.wait(200)
    }

    // calc tvl per project
    projects
      .map(project => {
        let tvl = 0
        console.log('tvl of ', project)
        collectData[project].bridges.map(bridge => bridge.items.map(item => {
          tvl += item.quote
          return ''
        }))
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
