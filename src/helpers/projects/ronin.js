import { TYPE_SIDECHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Ronin',
  explorer: "https://explorer.roninchain.com/",
  website: "https://bridge.roninchain.com/",
  twitter: "https://twitter.com/Ronin_network",
  color: "#1273ea",
  type: TYPE_SIDECHAIN,
  bridges: [
    {
      "address": "0x1a2a1c938ce3ec39b6d47113c7955baa9dd454f2",
      "name": "Bridge",
      "website": "https://bridge.roninchain.com/",
      "chainId": MAINNET,
    },
  ]
}

export default project
