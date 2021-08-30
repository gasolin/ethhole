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
    },
  ]
}

export default project
