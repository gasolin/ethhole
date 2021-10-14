import { TYPE_LAYER2_LEND } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Layer2.Finance',
  website: "https://layer2.finance/",
  github: "https://github.com/celer-network/layer2-finance-contracts",
  twitter: "https://twitter.com/layer2finance",
  color: "#ca9979",
  type: TYPE_LAYER2_LEND,
  // https://etherscan.io/address/0xFe81ab6930A30BdaE731fe7b6C6ABFbEAFc014a8#readContract
  // the main address's token balance will flow to other DEFI periodically,
  // need to track strategies TVL
  bridges: [
    {
      "address": "0xf86FD6735f88d5b6aa709B357AD5Be22CEDf1A05",
      "chainId": MAINNET,
      "name": "Layer 2",
    },
    {//1
      "address": "0x9D233A907E065855D2A9c7d4B552ea27fB2E5a36",
      "chainId": MAINNET,
      "name": "AAVE DAI"
    },
    {//2
      "address": "0xCbE56b00d173A26a5978cE90Db2E33622fD95A28",
      "chainId": MAINNET,
      "name": "AAVE USDC"
    },
    {//3
      "address": "0xf4B2cbc3bA04c478F0dC824f4806aC39982Dce73",
      "chainId": MAINNET,
      "name": "AAVE USDT"
    },
    // {//4
    //   "address": "0x50B96c4374EFeEA0C183D06679A14e951E33B4Dd",
    //   "chainId": MAINNET,
    //   "name": "AAVE SUSD"
    // },
    {//5
      "address": "0x30640476B9b47aBa450e351e8527Ba35B5E995bf",
      "chainId": MAINNET,
      "name": "AAVE BUSD"
    },
    // {//6
    //   "address": "0x61fc4d40D313Eb01483F537A6db2B29fB38aEa8d",
    //   "chainId": MAINNET,
    //   "name": "Compound ETH"
    // },
    {//7
      "address": "0x7A05831A2D0Dd5aA0c638c9d22c29b21DA5067Da",
      "chainId": MAINNET,
      "name": "Compound DAI"
    },
    {//8
      "address": "0x4d6406895EF1b408F0F3D4c4696e394Cc78629A0",
      "chainId": MAINNET,
      "name": "Compound USDC"
    },
    {//9
      "address": "0xc8e3785BCf59aC59d7a449128c633c6F6272D156",
      "chainId": MAINNET,
      "name": "Compound USDT"
    },
    // TODO: query fail
    // {//10
    //   "address": "0x1DA1cebC2525a5Bb1242CAde6E923F3f1388874E",
    //   "chainId": MAINNET,
    //   "name": "Curve3Pool Dai",
    //   "staked": ["curve"]
    // },
    // {//11
    //   "address": "0x3D3092560d48c02f524dfb3fa3CAdDc8A5717751",
    //   "chainId": MAINNET,
    //   "name": "Curve3Pool USDC",
    //   "staked": ["curve"]
    // },
    // {//12
    //   "address": "0xca222c64b7f3ca0322356fA19e9A09a13bE71e06",
    //   "chainId": MAINNET,
    //   "name": "Curve3Pool USDT",
    //   "staked": ["curve"]
    // },
  ]
}

export default project
