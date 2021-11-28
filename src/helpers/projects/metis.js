import { TYPE_LAYER2 } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Metis',
  website: "https://www.metis.io/",
  github: "https://github.com/MetisProtocol",
  twitter: "https://twitter.com/MetisDAO",
  explorer: "https://andromeda-explorer.metis.io/",
  color: "#1abc9c",
  type: TYPE_LAYER2,
  bridges: [
    {
      "address": "0x3980c9ed79d2c191A89E02Fa3529C60eD6e9c04b",
      "chainId": MAINNET,
    }
  ],
}

export default project
