import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import anyswap from './anyswap.js'

export const project = {
  name: 'Moonbeam', // required, name need to be able to use as key
  // explorer: "https://",
  website: "https://moonbeam.network/networks/moonbeam/",
  github: "https://github.com/PureStake/moonbeam",
  twitter: "https://twitter.com/moonbeamnetwork",
  // description: "Solidity Smart Contracts on Kusama",
  color: "#e1147b", // required
  type: TYPE_PUBLICCHAIN, // required
  bridges: [
    {
      "address": "0xec4486a90371c9b66f499ff3936f29f0d5af8b7e",  // required
      "chainId": MAINNET,  // required
      "name": "Multichain MoonBean bridge",
      "project": anyswap.name,
      "website": anyswap.website
    },
  ]
}

export default project
