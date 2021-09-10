import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import anyswap from './anyswap.js'

export const project = {
  name: 'Fusion',
  explorer: "https://fsnex.com/blocks",
  website: "https://www.fusion.org/en",
  github: "https://github.com/FUSIONFoundation",
  twitter: "https://twitter.com/FUSIONProtocol",
  color: "#358dcc",
  type: TYPE_PUBLICCHAIN,
  bridges: [
    {
      "address": "0x46290B0c3A234E3d538050d8F34421797532A827",
      "chainId": MAINNET,
      "name": "Anyswap Fusion bridge",
      "project": anyswap.name,
      "website": anyswap.website
    },
  ],
}

export default project
