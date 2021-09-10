import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import anyswap from './anyswap.js'

export const project = {
  name: 'Moonriver', // required, name need to be able to use as key
  // explorer: "https://",
  website: "https://moonbeam.network/networks/moonriver/",
  github: "https://github.com/PureStake/moonbeam",
  twitter: "https://twitter.com/moonbeamnetwork",
  // description: "Solidity Smart Contracts on Kusama",
  color: "#e1147b", // required
  type: TYPE_PUBLICCHAIN, // required
  bridges: [
    {
      "address": "0x10c6b61DbF44a083Aec3780aCF769C77BE747E23",  // required
      "chainId": MAINNET,  // required
      "name": "Anyswap MoonRiver bridge",
      "project": anyswap.name,
      "website": anyswap.website
    },
  ]
}

export default project
