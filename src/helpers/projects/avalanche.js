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
      "address": "0xE78388b4CE79068e89Bf8aA7f218eF6b9AB0e9d0",
      "chainId": MAINNET,
      "name": "Avalanche Bridge",
      "website": "https://bridge.avax.network/",
      "excludeAddr": [
        "0x7cf56db0f7781d478d5a96f6ee8e0b5cbaaf8ad2", //OMIC
      ],
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
