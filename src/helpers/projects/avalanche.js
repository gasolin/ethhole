import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import anyswap from './anyswap.js'

export const project = {
  name: 'Avalanche',
  explorer: "https://cchain.explorer.avax.network/",
  website: "https://www.avax.network/",
  github: "https://github.com/ava-labs",
  twitter: "https://twitter.com/avalancheavax",
  color: "#e84142",
  type: TYPE_PUBLICCHAIN,
  bridges: [
    {
      "address": "0xdAC7Bb7Ce4fF441A235F08408e632FA1D799A147",
      "chainId": MAINNET,
      "name": "Avalanche-Ethereum Bridge",
      "website": "https://aeb.xyz/"
    },
    {
      "address": "0x820A9eb227BF770A9dd28829380d53B76eAf1209",
      "chainId": MAINNET,
      "name": "Anyswap Avalanche bridge",
      "project": anyswap.name,
      "website": anyswap.website,
    }
  ],
}

export default project
