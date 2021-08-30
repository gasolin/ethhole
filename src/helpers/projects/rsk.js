import { TYPE_SIDECHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'RSK',
  explorer: "https://explorer.rsk.co/",
  website: "https://www.rsk.co/",
  twitter: "https://twitter.com/rsksmart",
  color: "#00b520",
  type: TYPE_SIDECHAIN,
  // https://developers.rsk.co/tools/tokenbridge/contractaddresses/
  bridges: [
    {
      "address": "0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d",
      "name": "Bridge",
      "chainId": MAINNET,
    },
  ]
}

export default project
