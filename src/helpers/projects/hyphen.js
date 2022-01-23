import { TYPE_LIQUIDITY } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'HyphenBridge', // required, name need to be able to use as key
  website: "https://hyphen.biconomy.io/",
  twitter: "https://twitter.com/biconomy",
  color: "#615CCD", // required
  type: TYPE_LIQUIDITY, // required
  bridges: [
    {
      "address": "0xF78765bd14B4E8527d9E4E5c5a5c11A44ad12F47",
      "chainId": MAINNET,  // required
      "name": "Bitconomy: Hyphen Bridge",
      "website": "https://hyphen.biconomy.io/"
    },
  ]
}

export default project
