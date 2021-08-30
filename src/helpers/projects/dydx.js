import { TYPE_LAYER2_EXCHANGE } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'dydx',
  website: "https://dydx.exchange/",
  github: "https://github.com/dydxprotocol",
  twitter: "https://twitter.com/dydxprotocol",
  color: "#6966FF",
  type: TYPE_LAYER2_EXCHANGE,
  bridges: [
    {
      "address": "0xD54f502e184B6B739d7D27a6410a67dc462D69c8",
      "chainId": MAINNET,
    }
  ]
}

export default project
