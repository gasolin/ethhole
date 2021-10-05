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
      "name": "Sollet Bridge",
      "chainId": MAINNET,
      "website": "https://www.sollet.io/",
      "excludeAddr": [
        "0xc0134b5b924c2fca106efb33c45446c466fbe03e", //ALEPH
      ],
    },
    {
      "address": "0xf92cD566Ea4864356C5491c177A430C222d7e678",
      "name": "Wormhole Bridge",
      "chainId": MAINNET,
    }
  ],
}

export default project
