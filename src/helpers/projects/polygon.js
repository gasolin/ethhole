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
        "0x91dfbee3965baaee32784c2d546b7a0c62f268c9", // BONDLY
        "0xcd1faff6e578fa5cac469d2418c95671ba1a62fe", //XTM
        "0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304", //MM
        "0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06", //PAR
        "0xb5a4ac5b04e777230ba3381195eff6a60c3934f2", //SURE
        "0xf5d669627376ebd411e34b98f19c868c8aba5ada", //AXS
        "0x33e18a092a93ff21ad04746c7da12e35d34dc7c4", //PLAY
        "0x2baecdf43734f22fd5c152db08e3c27233f0c7d2", //OM
        "0x5dc02ea99285e17656b8350722694c35154db1e8", //BOND
        "0xdd974d5c2e2928dea5f71b9825b8b646686bd200", //KNC
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
      "name": "Anyswap Polygon bridge",
      "project": anyswap.name,
      "website": anyswap.website
    },
    {
      "address": "0xF78765bd14B4E8527d9E4E5c5a5c11A44ad12F47",
      "chainId": MAINNET,
      "name": "Biconomy Hyphen Bridge",
      "website": "https://hyphen.biconomy.io/",
    }
  ],
}

export default project
