import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: "OKExChain",
  explorer: "https://www.oklink.com/okexchain",
  website: "https://www.okex.com/okexchain",
  github: "https://github.com/okex/exchain",
  twitter: "https://twitter.com/OKExChain",
  color: "#205fec",
  type: TYPE_PUBLICCHAIN,
  // https://www.okex.com/cross-chain-gateway
  bridges: [
    {
      "address": "0x2c8fbb630289363ac80705a1a61273f76fd5a161",
      "chainId": MAINNET,
      "name": "OKExChain bridge"
    },
  ]
}

export default project
