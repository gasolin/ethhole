import { TYPE_LIQUIDITY } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'THORSWAP', // required, name need to be able to use as key
  website: "https://app.thorswap.finance/",
  twitter: "https://twitter.com/thorswap",
  color: "#00d2ff", // required
  type: TYPE_LIQUIDITY, // required
  bridges: [
    {
      "address": "0xc145990e84155416144c532e31f89b840ca8c2ce",
      "chainId": MAINNET,  // required
      "name": "THORSwap V2",
      "website": "https://app.thorswap.finance/"
    },
  ]
}

export default project
