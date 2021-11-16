import { TYPE_LAYER2_EXCHANGE } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'ImmutableX',
  website: "https://www.immutable.com/",
  twitter: "https://twitter.com/immutable",
  explorer: "https://immutascan.io/",
  color: "#24d1e9",
  type: TYPE_LAYER2_EXCHANGE,
  bridges: [
    {
      "address": "0x5FDCCA53617f4d2b9134B29090C87D01058e27e9",
      "chainId": MAINNET,
    }
  ],
}

export default project
