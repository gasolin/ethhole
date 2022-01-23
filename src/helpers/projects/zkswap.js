import { TYPE_LAYER2_EXCHANGE } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: "ZKSwap",
  explorer: "https://zkswap.info/en",
  website: "https://zks.app",
  github: "https://github.com/l2labs",
  twitter: "https://twitter.com/ZKSwapOfficial",
  color: "#596efd",
  type: TYPE_LAYER2_EXCHANGE,
  bridges: [
    {
      "address": "0x6dE5bDC580f55Bc9dAcaFCB67b91674040A247e3",
      "chainId": MAINNET,
      "name": "ZKSwap (v2)",
    },
    {
      "address": "0x8eca806aecc86ce90da803b080ca4e3a9b8097ad",
      "chainId": MAINNET,
      "name": "ZKSwap (v1)",
    }
  ],
}

export default project
