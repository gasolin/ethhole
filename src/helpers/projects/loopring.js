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
      "address": "0x674bdf20A0F284D710BC40872100128e2d66Bd3f",
      "chainId": MAINNET,
    }
  ],
}

export default project
