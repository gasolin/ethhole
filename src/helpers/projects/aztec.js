import { TYPE_LAYER2_PAYMENT } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Aztec',
  explorer: "https://explorer.aztec.network/",
  website: "https://aztec.network/",
  github: "https://github.com/AztecProtocol",
  twitter: "https://twitter.com/aztecprotocol",
  color: "#944af2",
  type: TYPE_LAYER2_PAYMENT,
  bridges: [
    {
      "address": "0x737901bea3eeb88459df9ef1BE8fF3Ae1B42A2ba",
      "chainId": MAINNET,
      "name": "zk.money",
      "website": "https://zk.money/"
    }
  ],
}

export default project
