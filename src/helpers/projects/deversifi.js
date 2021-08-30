import { TYPE_LAYER2_EXCHANGE } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'DeversiFi',
  website: "https://www.deversifi.com/",
  github: "https://github.com/deversifi",
  twitter: "https://twitter.com/deversifi",
  color: "#5500FC",
  type: TYPE_LAYER2_EXCHANGE,
  bridges: [
    {
      "address": "0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b",
      "chainId": MAINNET,
    }
  ]
}

export default project
