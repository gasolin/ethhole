import { TYPE_SIDECHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import anyswap from './anyswap.js'

export const project = {
  name: "Gnosis",
  explorer: "https://blockscout.com/poa/xdai/",
  website: "https://www.xdaichain.com/",
  twitter: "https://twitter.com/xdaichain",
  color: "#1ca9a6",
  type: TYPE_SIDECHAIN,
  // https://www.xdaichain.com/about-xdai/news-and-information/comparisons/matic#similarities-and-differences
  // https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/xdai/index.js
  bridges: [
    {
      "address": "0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016",
      "name": "xDai Bridge",
      "chainId": MAINNET,
    },
    {
      "address": "0x88ad09518695c6c3712ac10a214be5109a655671",
      "name": "Omni Bridge",
      "chainId": MAINNET,
      "protocol": ["sushiswap", "synthetix", "uniswap"],
      "excludeAddr": [
        "0x072b999fc3d82f9ea08b8adbb9d63a980ff2b14d", //Sushiswap LP old
        "0xb5f278ee11811efec0692ec61b1e9f9984f2de11", //EMIT
      ]
    },
    {
      "address": "0xed7e6720ac8525ac1aeee710f08789d02cd87ecb",
      "chainId": MAINNET,
      "name": "owl bridge"
    },
    {
      "address": "0x2F10c5eE93ac666dA72195abA8a49FD6D27fA02F",
      "chainId": MAINNET,
      "name": "Anyswap XDAI bridge",
      "project": anyswap.name
    },
  ]
}

export default project
