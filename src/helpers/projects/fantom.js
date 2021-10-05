import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import anyswap from './anyswap.js'

export const project = {
  name: 'Fantom',
  explorer: "https://explorer.fantom.network/",
  website: "https://fantom.foundation/",
  github: "https://github.com/Fantom-Foundation",
  twitter: "https://twitter.com/FantomFDN",
  color: "#1969ff",
  type: TYPE_PUBLICCHAIN,
  bridges: [
    {
      "address": "0x65e64963b755043CA4FFC88029FfB8305615EeDD",
      "chainId": MAINNET,
      "name": "Anyswap Fantom bridge",
      "project": anyswap.name,
      "website": anyswap.website
    },
    // fUSDT
    {
      "address": "0xC564EE9f21Ed8A2d8E7e76c085740d5e4c5FaFbE",
      "chainId": MAINNET,
      "name": "Anyswap Fantom bridge",
      "project": anyswap.name,
      "website": anyswap.website,
      "excludeAddr": [
        "0x3472a5a71965499acd81997a54bba8d852c6e53d", //BADGER
      ],
    },
    // USDT
    {
      "address": "0xBe008e52c5682A49dd0260735a26Aa221f303456",
      "chainId": MAINNET,
      "name": "Anyswap Fantom bridge",
      "project": anyswap.name,
      "website": anyswap.website
    },
    {
      "address": "0x9A8C4bdCd75CFa1059A6E453Ac5cE9d3F5c82A35",
      "chainId": MAINNET,
      "name": "Fantom Bridge"
    },
  ]
}

export default project
