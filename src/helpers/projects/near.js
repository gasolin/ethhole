import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: "NEAR",
  website: "https://near.org/",
  github: "https://github.com/near",
  twitter: "https://twitter.com/nearprotocol",
  color: "#111618",
  type: TYPE_PUBLICCHAIN,
  bridges: [
    {
      "address": "0x23ddd3e3692d1861ed57ede224608875809e127f",
      "chainId": MAINNET,
      "name": "Rainbow bridge"
    }
  ],
}

export default project
