import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import anyswap from './anyswap.js'

// https://www.binance.org/en/assets-proof
export const project = {
  name: 'Binance Smart Chain',
  explorer: "https://bscscan.com/",
  website: "https://www.binance.org/en/smartChain",
  github: "https://github.com/binance-chain/",
  twitter: "https://twitter.com/binancechain",
  color: "#f8d12f",
  type: TYPE_PUBLICCHAIN,
  bridges: [
    {
      "address": "0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503",
      "chainId": MAINNET,
      "name": "Binance Smart Chain Bridge",
      "website": "https://www.binance.org/en/bridge"
    },
    {
      "address": "0x9BF4001d307dFd62B26A2F1307ee0C0307632d59",
      "chainId": MAINNET,
      "name": "Binance Smart Chain ETH Bridge",
      "website": "https://www.binance.org/en/bridge"
    },
    {
      "address": "0x13B432914A996b0A48695dF9B2d701edA45FF264",
      "chainId": MAINNET,
      "name": "Nerve Bridge",
      "project": anyswap.name,
      "website": "https://app.nerve.fi/bridge"
    },
    {
      "address": "0x533e3c0e6b48010873B947bddC4721b1bDFF9648",
      "chainId": MAINNET,
      "name": "Anyswap BSC bridge",
      "project": anyswap.name,
      "website": anyswap.website,
      "exclude": ["STAR", "FORM"],
      "excludeAddr": [
        "0xd2dda223b2617cb616c1580db421e4cfae6a8a85", //BONDLY
        "0x676cdc3312d0350749bed17cd3eb3b90e5917f42", //BONDLY
        "0xb5a4ac5b04e777230ba3381195eff6a60c3934f2", // SURE
        "0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304", //MM
      ]
    },
    {
      "address": "0xf301d525da003e874DF574BCdd309a6BF0535bb6",
      "chainId": MAINNET,
      "name": "Fuse tokens bridge",
      "website": "https://fuseswap.com/#/bridge",
      "excludeAddr": [
        "0x26ce25148832c04f3d7f26f32478a9fe55197166", //DEXT
      ]
    }
  ]
}

export default project
