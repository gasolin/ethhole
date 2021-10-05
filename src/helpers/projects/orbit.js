import { TYPE_LIQUIDITY } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Orbit',
  website: 'https://bridge.orbitchain.io/',
  explorer: 'https://bridge.orbitchain.io/history',
  twitter: 'https://twitter.com/Orbit_Chain',
  color: '#0676aa',
  type: TYPE_LIQUIDITY,
  bridges: [
    {
      "address": "0x1Bf68A9d1EaEe7826b3593C20a0ca93293cb489a",
      "chainId": MAINNET,
      "name": "Orbit Bridge"
    }
  ]
}

export default project
