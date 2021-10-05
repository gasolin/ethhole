import { TYPE_LIQUIDITY } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Celo Optics Bridge',
  website: "https://docs.celo.org/celo-codebase/protocol/optics",
  github: "https://github.com/celo-org/optics-monorepo",
  color: "#35d07f",
  type: TYPE_LIQUIDITY,
  bridges: [
    {
      "address": "0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47",
      "chainId": MAINNET,
      "name": "Optics Bridge"
    }
  ]
}

export default project
