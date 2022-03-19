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
      "name": "OKExChain bridge",
      "excludeAddr": [
        "0xa06884f35916badb1bf974a30df1accb2cc316cb", //Floki
        "0x8ab448a98840f13e38e1a25328abe3eba190809b", // fake Samsung
      ]
    },
  ]
}

export default project
