import { TYPE_LAYER2_PAYMENT } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: "zkSync",
  explorer: "https://zkscan.io/explorer/",
  website: "https://zksync.io/",
  github: "https://github.com/matter-labs/zksync",
  twitter: "https://twitter.com/zksync",
  color: "#8c8dfc",
  type: TYPE_LAYER2_PAYMENT,
  bridges: [
    {
      "address": "0xaBEA9132b05A70803a4E85094fD0e1800777fBEF",
      "chainId": MAINNET,
    }
  ],
}

export default project
