import { TYPE_LAYER2_PAYMENT } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Polygon Hermez',
  explorer: "https://explorer.hermez.io/",
  website: "https://hermez.io/",
  github: "https://github.com/hermeznetwork/",
  twitter: "https://twitter.com/hermez_network",
  color: "#e75a2b",
  type: TYPE_LAYER2_PAYMENT,
  bridges: [
    {
      "address": "0xA68D85dF56E733A06443306A095646317B5Fa633",
      "chainId": MAINNET,
    }
  ],
}

export default project
