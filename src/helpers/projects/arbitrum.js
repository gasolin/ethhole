import { TYPE_LAYER2 } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Arbitrum One',
  explorer: "https://arbiscan.io/",
  website: "https://offchainlabs.com/",
  github: "https://github.com/OffchainLabs/arbitrum",
  twitter: "https://twitter.com/OffchainLabs",
  color: "#9e5ddb",
  type: TYPE_LAYER2,
  bridges: [
    {
      "address": "0x011B6E24FfB0B5f5fCc564cf4183C5BBBc96D515",
      "chainId": MAINNET,
      "name": "Ethereum Bridge",
      "website": "https://offchainlabs.com/"
    },
    // {
    //   "address": "0x86E525A3565235b2bb934df43E01c8B092c03756",
    //   "chainId": MAINNET,
    //   "name": "ERC20 Bridge",
    //   "website": "https://offchainlabs.com/"
    // }
  ],
}

export default project
