import { TYPE_LAYER2 } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Boba Network',
  explorer: "https://blockexplorer.boba.network/",
  website: "https://boba.network",
  github: "https://github.com/omgnetwork",
  twitter: "https://twitter.com/bobanetwork",
  color: "#ccff00",
  type: TYPE_LAYER2,
  bridges: [
    {
      "address": "0xdc1664458d2f0B6090bEa60A8793A4E66c2F1c00",
      "chainId": MAINNET,
      "name": "L1 Standard Bridge"
    },
    {
      "address": "0x1A26ef6575B7BBB864d984D9255C069F6c361a14",
      "chainId": MAINNET,
      "name": "L1 Liquidity Pool"
    }
  ],
}

export default project
