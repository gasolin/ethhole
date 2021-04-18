// deno run --allow-net --allow-write fetch_data.js --key [COVALENT_API_KEY]
// get covalent API key from https://www.covalenthq.com/platform/#/auth/register/
import { parse } from 'https://deno.land/std/flags/mod.ts'
import { Timeout } from "https://deno.land/x/timeout/mod.ts"

import { getTodayTag } from '../src/helpers/formatDate.js'
import { ETH_BRIDGE_CONTRACTS } from '../src/data/bridge_contracts.js'
const { args, exit, writeTextFileSync } = Deno

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

// collect contracts
const addrInfo = {}
Array.from(new Set(
  (Object.keys(ETH_BRIDGE_CONTRACTS))
    .map(project => ETH_BRIDGE_CONTRACTS[project]?.bridges.map(entry => {
      addrInfo[entry.address] = {project: project, chainId: entry.chainId}
      return entry.address
    }))
    .flat(1)
))
// console.log('contracts %O', addrInfo)

const getBalanceURL = (address, chainId = 1) => `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?${params}`

// write file
function writeJson(data, path) {
  try {
    const today = getTodayTag()
    const filePath = `src/data/${today}.json`
    console.log('write to', path ? path : filePath)
    writeTextFileSync(path ? path : filePath, JSON.stringify(data))

    const dataPath = `src/data/data.js`
    const content = `import chainData from './${today}.json'

export default chainData
`
    writeTextFileSync(dataPath, content)
    return "Written to " + dataPath

  } catch (e) {
    console.error(e.message)
  }
}

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
      console.log('process ', proj)
      if (!collectData[proj]) {
        collectData[proj] = {}
        collectData[proj].bridges = [data.data]
      }
      collectData[proj].bridges.push(data.data)
      // to not brute the API limit
      await Timeout.wait(200)
    }

    // calc tvl per project
    (Object.keys(ETH_BRIDGE_CONTRACTS))
      .map(proj => {
        let tvl = 0
        collectData[proj].bridges.map(bridge => bridge.items.map(item => {
          tvl += item.quote
        }))
        collectData[proj].tvl = tvl
      })

    writeJson(collectData)
  } catch (e) {
    console.error(e.message)
  }
}

main()
