import { TYPE_SIDECHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'PolyNetwork',
  explorer: "https://explorer.poly.network/",
  website: "https://www.poly.network/",
  github: "https://github.com/polynetwork",
  twitter: "https://twitter.com/PolyNetwork2",
  color: "#2222FF",
  type: TYPE_SIDECHAIN,
  // https://github.com/polynetwork/docs/blob/master/config/README.md
  bridges: [
    {
      "address": "0x250e76987d838a75310c34bf422ea9f1AC4Cc906",
      "name": "Lock Proxy",
      "chainId": MAINNET,
      "excludeAddr": [
        "0xcb46c550539ac3db72dc7af7c89b11c306c727c2", //pONT
      ],
    },
    // {
    //   "address": "0x2f7ac9436ba4B548f9582af91CA1Ef02cd2F1f03",
    //   "name": "Lock Proxy",
    //   "chainId": BSC,
    // },
  ]
}

export default project
