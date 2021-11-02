import { TYPE_SIDECHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import anyswap from './anyswap.js'

export const project = {
  name: "xDai",
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
        "0xdada02029134f73af874640ef351a8cf85ddada0", //NODE
        "0xa06884f35916badb1bf974a30df1accb2cc316cb", //Floki
        "0x9ca85572e6a3ebf24dedd195623f188735a5179f", //y3CRV
        "0x70f823ed7643fd7a26fdf8753827d31c16374fde", //PKGX
        "0x072b999fc3d82f9ea08b8adbb9d63a980ff2b14d", //Sushiswap LP old
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
