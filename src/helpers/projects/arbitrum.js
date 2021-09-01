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
      "website": "https://bridge.arbitrum.io/"
    },
    {
      "address": "0xa3A7B6F88361F48403514059F1F16C8E78d60EeC",
      "chainId": MAINNET,
      "name": "ERC20 Bridge",
      "website": "https://bridge.arbitrum.io/"
    },
    {
      "address": "0xcEe284F754E854890e311e3280b767F80797180d",
      "chainId": MAINNET,
      "name": "Custom Gateway",
      "website": "https://bridge.arbitrum.io"
    }
  ],
}

export default project
