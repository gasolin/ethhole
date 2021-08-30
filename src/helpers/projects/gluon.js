import { TYPE_SIDECHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: "GLUON",
  explorer: "https://gluon.leverj.io/",
  website: "https://gluon.network/",
  github: "https://github.com/leverj",
  twitter: "https://twitter.com/GluonNetwork",
  color: "#f7961c",
  type: TYPE_SIDECHAIN,
  // https://live.leverj.io/futures/api/v1/all/config assets
  bridges: [
    {
      "address": "0x75ace7a086ea0fb1a79e43cc6331ad053d8c67cb",
      "chainId": MAINNET,
      "name": "GLUON bridge",
      "project": 'GLUON',
      "website": "https://gluon.network/"
    },
    // assets
    {
      "address": "0xBbff34E47E559ef680067a6B1c980639EEb64D24",
      "chainId": MAINNET,
      "name": "L2 bridge",
    },
    {
      "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "chainId": MAINNET,
      "name": "USDT bridge",
    },
  ]
}

export default project
