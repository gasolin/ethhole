import { TYPE_LAYER2_DAO } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Habitat',
  explorer: "https://0xhabitat.org/explorer/",
  website: "https://0xhabitat.org/",
  github: "https://github.com/0xHabitat",
  twitter: "https://twitter.com/EnterTheHabitat",
  color: "#FBDC60",
  type: TYPE_LAYER2_DAO,
  bridges: [
    {
      "address": "0x96E471B5945373dE238963B4E032D3574be4d195",
      "chainId": MAINNET,
    }
  ]
}

export default project
