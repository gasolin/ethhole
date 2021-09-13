import { TYPE_LAYER2 } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import hop from './hop.js'

export const project = {
  name: 'Optimism',
  explorer: "https://optimistic.etherscan.io/",
  website: "https://optimism.io/",
  github: "https://github.com/ethereum-optimism",
  twitter: "https://twitter.com/optimismPBC",
  color: "#f01a37",
  type: TYPE_LAYER2,
  bridges: [
    // old snx bridge
    {
      "address": "0x5fd79d46eba7f351fe49bff9e87cdea6c821ef9f",
      "chainId": MAINNET,
      "name": "old Synthetix bridge"
    },
    // https://github.com/makerdao/optimism-dai-bridge
    {
      "address": "0x467194771dAe2967Aef3ECbEDD3Bf9a310C76C65",
      "chainId": MAINNET,
      "name": "Optimism Dai Bridge"
    },
    {
      "address": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
      "chainId": MAINNET,
      "name": "Optimism Gateway"
    },
    {
      "address": "0x3E4a3a4796d16c0Cd582C382691998f7c06420B6",
      "chainId": MAINNET,
      "name": "Hop Optimism bridge",
      "project": hop.name,
      "website": hop.website
    }
  ],
}

export default project
