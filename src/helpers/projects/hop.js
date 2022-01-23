import { TYPE_LIQUIDITY } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Hop',
  website: 'https://app.hop.exchange/',
  twitter: 'https://twitter.com/HopProtocol',
  github: 'https://github.com/hop-protocol',
  color: '#B32EFF',
  type: TYPE_LIQUIDITY,
  bridges: [
    {
      "address": "0x3666f603Cc164936C1b87e207F36BEBa4AC5f18a",
      "chainId": MAINNET,
      "name": "Hop Exchange Bridge"
    },
    {
      "address": "0x3E4a3a4796d16c0Cd582C382691998f7c06420B6",
      "chainId": MAINNET,
      "name": "Hop exchange: USDt Bridge"
    },
    {
      "address": "0x3666f603Cc164936C1b87e207F36BEBa4AC5f18a",
      "chainId": MAINNET,
      "name": "Hop exchange: USDC Bridge"
    },
    {
      "address": "0x3d4Cc8A61c7528Fd86C55cfe061a78dCBA48EDd1",
      "chainId": MAINNET,
      "name": "Hop exchange: DAI Bridge"
    },
    {
      "address": "0x22B1Cbb8D98a01a3B71D034BB899775A76Eb1cc2",
      "chainId": MAINNET,
      "name": "Hop exchange: MATIC Bridge"
    },
  ]
}

export default project
