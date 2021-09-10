import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'IoTeX',
  explorer: "https://iotexscan.io/",
  website: "https://www.iotex.io",
  github: "https://github.com/iotexproject/",
  twitter: "https://twitter.com/iotex_io",
  color: "#01943f",
  type: TYPE_PUBLICCHAIN,
  bridges: [
    {
      "address": "0xc2e0f31d739cb3153ba5760a203b3bd7c27f0d7a",
      "chainId": MAINNET,
      "name": "IoTeX Chain bridge",
    },
  ]
}

export default project
