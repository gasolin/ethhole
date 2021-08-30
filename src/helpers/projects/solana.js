import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'SOLANA',
  explorer: "https://explorer.solana.com/",
  website: "https://solana.com/",
  github: "https://github.com/solana-labs/",
  twitter: "https://twitter.com/",
  color: "#d83aeb",
  type: TYPE_PUBLICCHAIN,
  bridges: [
    {
      "address": "0xeae57ce9cc1984F202e15e038B964bb8bdF7229a",
      "name": "Wormhole Bridge",
      "chainId": MAINNET,
    }
  ],
}

export default project
