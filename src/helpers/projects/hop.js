import { TYPE_CROSSCHAIN_DEX } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Hop',
  website: 'https://app.hop.exchange/',
  twitter: 'https://twitter.com/HopProtocol',
  github: 'https://github.com/hop-protocol',
  color: '#B32EFF',
  type: TYPE_CROSSCHAIN_DEX,
  bridges: [
    {
      "address": "0x3666f603Cc164936C1b87e207F36BEBa4AC5f18a",
      "chainId": MAINNET,
      "name": "Hop Exchange Bridge"
    }
  ]
}

export default project
