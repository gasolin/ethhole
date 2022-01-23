import { TYPE_LAYER2_EXCHANGE } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Loopring',
  website: "https://loopring.org",
  github: "https://github.com/Loopring",
  twitter: "https://twitter.com/loopringorg",
  color: "#1c42ff",
  type: TYPE_LAYER2_EXCHANGE,
  bridges: [
    {
      "address": "0x0baba1ad5be3a5c0a66e7ac838a129bf948f1ea4",
      "name": "Exchange v2",
      "chainId": MAINNET,
    },
    {
      "address": "0x674bdf20A0F284D710BC40872100128e2d66Bd3f",
      "chainId": MAINNET,
    }
  ],
}

export default project
