import { TYPE_SIDECHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'
import anyswap from './anyswap.js'

export const project = {
  name: 'Polygon',
  explorer: "https://explorer-mainnet.maticvigil.com/",
  website: "https://polygon.technology/",
  github: "https://github.com/maticnetwork/",
  twitter: "https://twitter.com/maticnetwork",
  color: "#8248e5",
  type: TYPE_SIDECHAIN,
  // https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json
  // https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/polygon/index.js
  bridges: [
    {
      "address": "0x8484Ef722627bf18ca5Ae6BcF031c23E6e922B30",
      "chainId": MAINNET,
      "name": "PoS Ether bridge"
    },
    {
      "address": "0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf",
      "chainId": MAINNET,
      "name": "PoS ERC20 bridge",
      "protocol": ["dhedge", "synthetix", "mushroom", "aave"],
      "exclude": ["KNG"],
      "excludeAddr": [
        "0x39abe870f44188f66c39eb54eb87ee8f080bf20e", // OMIC
        "0x7cf56db0f7781d478d5a96f6ee8e0b5cbaaf8ad2" // OMIC
      ],
    },
    {
      "address": "0x401F6c983eA34274ec46f84D70b31C151321188b",
      "chainId": MAINNET,
      "name": "Plasma bridge"
    },
    {
      "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
      "chainId": MAINNET,
      "name": "MATIC token"
    },
    {
      "address": "0x5e3Ef299fDDf15eAa0432E6e66473ace8c13D908",
      "chainId": MAINNET,
      "name": "Stake Manager"
    },
    {
      "address": "0x668b9734FfE9eE8a01d4Ade3362De71E8989EA87",
      "chainId": MAINNET,
      "name": "Multichain Polygon bridge",
      "project": anyswap.name,
      "website": anyswap.website
    }
  ],
}

export default project
