import { TYPE_LIQUIDITY } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'cBridge', // required, name need to be able to use as key
  website: "https://cbridge.celer.network/",
  github: "https://github.com/celer-network/cbridge-node",
  twitter: "https://twitter.com/CelerNetwork",
  // description: 'Transfer tokens across Ethereum, Binance Smart Chain, Polygon, OKExChain, Arbitrum, Optimism, xDai, Fantom, Avalanche',
  color: "#FFE5E5", // required
  type: TYPE_LIQUIDITY, // required
  bridges: [
    {
      "address": "0x841ce48F9446C8E281D3F1444cB859b4A6D0738C",  // required
      "chainId": MAINNET,  // required
      "name": "cBridge",
      "website": "https://cbridge.celer.network/"
    },
  ]
}

export default project
