import { TYPE_STAKING } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: "ETH 2",
  website: "https://ethereum.org/en/eth2/",
  github: "https://github.com/ethereum/eth2.0-specs",
  twitter: "https://twitter.com/ethdotorg",
  color: "#747c84",
  type: TYPE_STAKING,
  bridges: [
    {
      "address": "0x00000000219ab540356cbb839cbe05303d7705fa",
      "chainId": MAINNET,
      "name": "ETH2 Staking",
      "website": "https://launchpad.ethereum.org/en/"
    },
  ]
}

export default project
