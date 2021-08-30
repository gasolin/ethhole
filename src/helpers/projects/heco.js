import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import anyswap from './anyswap.js'

export const project = {
  name: 'HUOBI ECO CHAIN',
  explorer: "https://hecoinfo.com/",
  website: "https://www.hecochain.com/en-us/",
  github: "https://github.com/huobiGroup/",
  twitter: "https://twitter.com/HECO_Chain",
  color: "#01943f",
  type: TYPE_PUBLICCHAIN,
  bridges: [
    // https://docs.hecochain.com/#/hecobridge
    {
      "address": "0xa929022c9107643515f5c777ce9a910f0d1e490c",
      "chainId": MAINNET,
      "name": "Huobi ECO Chain bridge",
    },
    {
      "address": "0xD779967F8B511C5edf39115341B310022900eFED",
      "chainId": MAINNET,
      "name": "connext HECO bridge",
      "project": anyswap.name
    },
  ]
}

export default project
