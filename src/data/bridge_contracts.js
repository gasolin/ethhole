const TYPE_LAYER2 = 'layer2'
const TYPE_LAYER2_PAYMENT = 'l2payment'
const TYPE_LAYER2_EXCHANGE = 'l2ex'
const TYPE_SIDECHAIN = 'sidechain'
const TYPE_LAYER2_DERIVATIVES = 'l2derivatives'
const TYPE_LAYER2_LEND = 'l2lend'
// const TYPE_OPTIMISTIC_ROLLUP = 'optimisticrollup'
// const TYPE_ZK_ROLLUP = 'zkrollup'
// const TYPE_STATE_CHANNEL = 'statechannel'

// chainId
const MAINNET = 1 // ethereum
// const MATIC = 137
const BSC = 57
const XDAI = 100

export const typeMap = {
  [TYPE_LAYER2]: 'General',
  [TYPE_LAYER2_PAYMENT]: 'Payment',
  [TYPE_LAYER2_EXCHANGE]: 'DEX',
  [TYPE_SIDECHAIN]: 'Side Chain',
  [TYPE_LAYER2_DERIVATIVES]: 'Derivatives',
  [TYPE_LAYER2_LEND]: 'Lend',
  // [TYPE_OPTIMISTIC_ROLLUP]: "Optimistic",
  // [TYPE_ZK_ROLLUP]: "Zk",
  // [TYPE_STATE_CHANNEL]: "State Channel",
}

export const getTypeMap = (type) => typeMap[type] || 'Unknown'

export const ETH_BRIDGE_CONTRACTS = {
  "Aztec": {
    "bridges": [
      {
        "address": "0x737901bea3eeb88459df9ef1BE8fF3Ae1B42A2ba",
        "chainId": MAINNET,
      }
    ],
    "explorer": "https://explorer.aztec.network/",
    "website": "https://aztec.network/",
    "github": "https://github.com/AztecProtocol",
    "twitter": "https://twitter.com/aztecprotocol",
    "color": "#944af2",
    "type": TYPE_LAYER2_PAYMENT
  },
  "Avalanche": {
    "bridges": [
      {
        "address": "0xdAC7Bb7Ce4fF441A235F08408e632FA1D799A147",
        "chainId": MAINNET,
      }
    ],
    "explorer": "https://cchain.explorer.avax.network/",
    "website": "https://www.avalabs.org/",
    "github": "https://github.com/ava-labs",
    "twitter": "https://twitter.com/avalancheavax",
    "color": "#e84142",
    "type": TYPE_LAYER2
  },
  // https://github.com/connext/chaindata/blob/main/chains.json
  "connext": {
    "bridges": [
      {
        "address": "0x13B432914A996b0A48695dF9B2d701edA45FF264",
        "chainId": MAINNET,
        "name": "BSC bridge"
      },
      {
        "address": "0x533e3c0e6b48010873B947bddC4721b1bDFF9648",
        "chainId": MAINNET,
        "name": "BSC bridge"
      },
      {
        "address": "0x2F10c5eE93ac666dA72195abA8a49FD6D27fA02F",
        "chainId": MAINNET,
        "name": "XDAI bridge"
      },
      {
        "address": "0xD779967F8B511C5edf39115341B310022900eFED",
        "chainId": MAINNET,
        "name": "HECO bridge"
      },
      {
        "address": "0x65e64963b755043CA4FFC88029FfB8305615EeDD",
        "chainId": MAINNET,
        "name": "Fantom bridge"
      },
      {
        "address": "0xC564EE9f21Ed8A2d8E7e76c085740d5e4c5FaFbE",
        "chainId": MAINNET,
        "name": "Fantom bridge"
      },
      {
        "address": "0xBe008e52c5682A49dd0260735a26Aa221f303456",
        "chainId": MAINNET,
        "name": "Fantom bridge"
      },
      {
        "address": "0x46290B0c3A234E3d538050d8F34421797532A827",
        "chainId": MAINNET,
        "name": "Fusion bridge"
      },
      {
        "address": "0x820A9eb227BF770A9dd28829380d53B76eAf1209",
        "chainId": MAINNET,
        "name": "Avalanche bridge"
      }
    ],
    "website": "https://www.connext.network/",
    "github": "https://github.com/connext",
    "twitter": "https://twitter.com/connextnetwork",
    "color": "#29c1fc",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "dydx": {
    "bridges": [
      {
        "address": "0xD54f502e184B6B739d7D27a6410a67dc462D69c8",
        "chainId": MAINNET,
      }
    ],
    "website": "https://dydx.exchange/",
    "github": "https://github.com/dydxprotocol",
    "twitter": "https://twitter.com/dydxprotocol",
    "color": "#6966FF",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "DeversiFi": {
    "bridges": [
      {
        "address": "0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b",
        "chainId": MAINNET,
      }
    ],
    "website": "https://www.deversifi.com/",
    "github": "https://github.com/deversifi",
    "twitter": "https://twitter.com/deversifi",
    "color": "#5500FC",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "Fuel": {
    "bridges": [
      {
        "address": "0x6880f6Fd960D1581C2730a451A22EED1081cfD72",
        "chainId": MAINNET,
      }
    ],
    "explorer": "https://mainnet.fuel.sh/network",
    "website": "https://fuel.sh/",
    "github": "https://github.com/fuellabs",
    "twitter": "https://twitter.com/fuellabs_",
    "color": "#04c399",
    "type": TYPE_LAYER2_PAYMENT
  },
  // https://github.com/harmony-one/ethhmy-bridge.sdk/blob/main/src/configs/mainnet.ts
  "Harmony": {
    "bridges": [
      {
        "address": "0xfD53b1B4AF84D59B20bF2C20CA89a6BeeAa2c628",
        "name": "BUSD manager"
      },
      {
        "address": "0xfE601dE9D4295274b9904D5a9Ad7069F23eE2B32",
        "name": "LINK manager"
      },
      {
        "address": "0x2dCCDB493827E15a5dC8f8b72147E6c4A5620857",
        "name": "ERC20 manager"
      },
      // {
      //   "address": "0x426A61A2127fDD1318Ec0EdCe02474f382FdAd30",
      //   "name": "ERC721 manager"
      // }
    ],
    "explorer": "https://explorer.harmony.one/",
    "website": "https://www.harmony.one/",
    "github": "https://github.com/harmony-one",
    "twitter": "https://harmony.one/twitter",
    "color": "#00ade8",
    "type": TYPE_SIDECHAIN
  },
  "Hermez": {
    "bridges": [
      {
        "address": "0xA68D85dF56E733A06443306A095646317B5Fa633",
        "chainId": MAINNET
      }
    ],
    "explorer": "https://explorer.hermez.io/",
    "website": "https://hermez.io/",
    "github": "https://github.com/hermeznetwork/",
    "twitter": "https://twitter.com/hermez_network",
    "color": "#e75a2b",
    "type": TYPE_LAYER2_PAYMENT
  },
  "ImmutableX": {
    "bridges": [
      {
        "address": "0x5FDCCA53617f4d2b9134B29090C87D01058e27e9",
        "chainId": MAINNET,
      }
    ],
    "website": "https://www.immutable.com/",
    "twitter": "https://twitter.com/immutable",
    "color": "#24d1e9",
    "type": TYPE_LAYER2_EXCHANGE
  },
  // https://etherscan.io/address/0xFe81ab6930A30BdaE731fe7b6C6ABFbEAFc014a8#readContract
  // the main address's token balance will flow to other DEFI periodically,
  // need to track strategies TVL
  "Layer2.Finance": {
    "bridges": [
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
      {//10
        "address": "0x1DA1cebC2525a5Bb1242CAde6E923F3f1388874E",
        "chainId": MAINNET,
        "name": "Curve3Pool Dai",
        "protocol": "curve"
      },
      {//11
        "address": "0x3D3092560d48c02f524dfb3fa3CAdDc8A5717751",
        "chainId": MAINNET,
        "name": "Curve3Pool USDC",
        "protocol": "curve"
      },
      {//12
        "address": "0xca222c64b7f3ca0322356fA19e9A09a13bE71e06",
        "chainId": MAINNET,
        "name": "Curve3Pool USDT",
        "protocol": "curve"
      },
    ],
    "website": "https://layer2.finance/",
    "github": "https://github.com/celer-network/layer2-finance-contracts",
    "twitter": "https://twitter.com/layer2finance",
    "color": "#ca9979",
    "type": TYPE_LAYER2_LEND
  },
  "Loopring": {
    "bridges": [
      {
        "address": "0x674bdf20A0F284D710BC40872100128e2d66Bd3f",
        "chainId": MAINNET,
      }
    ],
    "website": "https://loopring.org",
    "github": "https://github.com/Loopring",
    "twitter": "https://twitter.com/loopringorg",
    "color": "#1c42ff",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "Optimism": {
    "bridges": [
      {
        "address": "0x045e507925d2e05D114534D0810a1abD94aca8d6",
        "chainId": MAINNET,
      }
    ],
    "explorer": "https://mainnet-l2-explorer.surge.sh/",
    "website": "https://optimism.io/",
    "github": "https://github.com/ethereum-optimism",
    "twitter": "https://twitter.com/optimismPBC",
    "color": "#f01a37",
    "type": TYPE_LAYER2_DERIVATIVES
  },
  // https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json
  "Polygon": {
    "bridges": [
      {
        "address": "0x8484Ef722627bf18ca5Ae6BcF031c23E6e922B30",
        "chainId": MAINNET,
        "name": "PoS Ether bridge"
      },
      {
        "address": "0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf",
        "chainId": MAINNET,
        "name": "PoS ERC20 bridge"
      },
      {
        "address": "0x401F6c983eA34274ec46f84D70b31C151321188b",
        "chainId": MAINNET,
        "name": "Plasma bridge"
      }
    ],
    "explorer": "https://explorer-mainnet.maticvigil.com/",
    "website": "https://polygon.technology/",
    "github": "https://github.com/maticnetwork/",
    "twitter": "https://twitter.com/maticnetwork",
    "color": "#8248e5",
    "type": TYPE_SIDECHAIN
  },
  // https://github.com/polynetwork/docs/blob/master/config/README.md
  "PolyNetwork": {
    "bridges": [
      {
        "address": "0x250e76987d838a75310c34bf422ea9f1AC4Cc906",
        "name": "Lock Proxy",
        "chainId": MAINNET,
      },
      // {
      //   "address": "0x2f7ac9436ba4B548f9582af91CA1Ef02cd2F1f03",
      //   "name": "Lock Proxy",
      //   "chainId": BSC,
      // },
    ],
    "explorer": "https://explorer.poly.network/",
    "website": "https://www.poly.network/",
    "github": "https://github.com/polynetwork",
    "twitter": "https://twitter.com/PolyNetwork2",
    "color": "#2222FF",
    "type": TYPE_SIDECHAIN
  },
  // https://developers.rsk.co/tools/tokenbridge/contractaddresses/
  "RSK": {
    "bridges": [
      {
        "address": "0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d",
        "name": "Bridge",
        "chainId": MAINNET,
      }
    ],
    "explorer": "https://explorer.rsk.co/",
    "website": "https://www.rsk.co/",
    "twitter": "https://twitter.com/rsksmart",
    "color": "#00b520",
    "type": TYPE_SIDECHAIN
  },
  // https://www.xdaichain.com/about-xdai/news-and-information/comparisons/matic#similarities-and-differences
  "xDai": {
    "bridges": [
      {
        "address": "0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016",
        "name": "xDai Bridge",
        "chainId": MAINNET,
      },
      {
        "address": "0x88ad09518695c6c3712ac10a214be5109a655671",
        "name": "Omni Bridge",
        "chainId": MAINNET,
      }
    ],
    "explorer": "https://blockscout.com/poa/xdai/",
    "website": "https://www.xdaichain.com/",
    "twitter": "https://twitter.com/xdaichain",
    "color": "#1ca9a6",
    "type": TYPE_SIDECHAIN
  },
  "ZKSwap": {
    "bridges": [
      {
        "address": "0x8eca806aecc86ce90da803b080ca4e3a9b8097ad",
        "chainId": MAINNET,
      }
    ],
    "explorer": "https://zkswap.info/en/transactions",
    "website": "https://zkswap.info/en",
    "github": "https://github.com/l2labs",
    "twitter": "https://twitter.com/ZKSwapOfficial",
    "color": "#596efd",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "zkSync": {
    "bridges": [
      {
        "address": "0xaBEA9132b05A70803a4E85094fD0e1800777fBEF",
        "chainId": MAINNET,
      }
    ],
    "explorer": "https://zkscan.io/explorer/",
    "website": "https://zksync.io/",
    "github": "https://github.com/matter-labs/zksync",
    "twitter": "https://twitter.com/zksync",
    "color": "#8c8dfc",
    "type": TYPE_LAYER2_PAYMENT
  }
}

export const XDAI_BRIDGE_CONTRACTS = {
  // https://www.xdaichain.com/for-users/bridges/converting-xdai-via-bridge/transfer-sai-dai-without-the-ui-using-web3-or-mobile-wallet
  "xDai": {
    "bridges": [
      {
        "address": "0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6",
        "name": "Dai Bridge",
        "chainId": XDAI,
      }, // xdai to ethereum
    ],
    "explorer": "https://blockscout.com/poa/xdai/",
    "website": "https://www.xdaichain.com/",
    "twitter": "https://twitter.com/xdaichain",
    "color": "#1ca9a6",
    "type": TYPE_SIDECHAIN
  },
  // https://docs.connext.network/connext-MAINNET
  "connext": {
    "bridges": [
      {
        "address": "0xE540998865aFEB054021dc849Cc6191b8E09dC08",
        "chainId": XDAI,
      },
    ],
    "website": "https://www.connext.network/",
    "github": "https://github.com/connext",
    "twitter": "https://twitter.com/connextnetwork",
    "color": "#29c1fc",
    "type": TYPE_LAYER2_EXCHANGE
  },
}

export const BSC_BRIDGE_CONTRACTS = {
  // https://docs.connext.network/connext-MAINNET
  "connext": {
    "bridges": [
      {
        "address": "0xE540998865aFEB054021dc849Cc6191b8E09dC08",
        "chainId": BSC,
      },
    ],
    "website": "https://www.connext.network/",
    "github": "https://github.com/connext",
    "twitter": "https://twitter.com/connextnetwork",
    "color": "#29c1fc",
    "type": TYPE_LAYER2_EXCHANGE
  },
  // https://github.com/polynetwork/docs/blob/master/config/README.md
  "PolyNetwork": {
    "bridges": [
      {
        "address": "0x2f7ac9436ba4B548f9582af91CA1Ef02cd2F1f03",
        "name": "Lock Proxy",
        "chainId": BSC,
      },
    ],
    "explorer": "https://explorer.poly.network/",
    "website": "https://www.poly.network/",
    "github": "https://github.com/polynetwork",
    "twitter": "https://twitter.com/PolyNetwork2",
    "color": "#2222FF",
    "type": TYPE_SIDECHAIN
  },
}
