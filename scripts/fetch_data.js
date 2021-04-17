// deno run --allow-net --allow-write fetch_data.js --key [COVALENT_API_KEY]
// get covalent API key from https://www.covalenthq.com/platform/#/auth/register/
import { parse } from 'https://deno.land/std/flags/mod.ts'
import { Timeout } from "https://deno.land/x/timeout/mod.ts"

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
const contractsMap = {}
Array.from(new Set(
  (Object.keys(ETH_BRIDGE_CONTRACTS))
    .map(project => ETH_BRIDGE_CONTRACTS[project]?.bridges.map(entry => {
      contractsMap[entry.address] = project
      return entry.address
    }))
    .flat(1)
))
// console.log('contracts %O', contractsMap)

const getBalanceURL = address => `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?${params}`

// write file
function writeJson(data, path) {
  try {
    const now = new Date()
    const today = now.toISOString().split('T')[0]
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

async function getBalances(address) {
  if (!address) return

  const link = getBalanceURL(address)

  const res = await fetch(link)
  const json = await res.json()
  // console.log(json.data)
  return json
}

// main
async function main() {
  try {
    const collectData = {}
    const addrs = Object.keys(contractsMap)
    for (const addr of addrs) {
      const data = await getBalances(addr)
      const proj = contractsMap[addr]
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
