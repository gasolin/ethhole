const TYPE_LAYER2 = 'layer2'
const TYPE_LAYER2_PAYMENT = 'l2payment'
const TYPE_LAYER2_EXCHANGE = 'l2ex'
const TYPE_LAYER2_DAO = 'l2dao'
export const TYPE_SIDECHAIN = 'sidechain'
export const TYPE_PUBLICCHAIN = 'publicchain'
const TYPE_LAYER2_DERIVATIVES = 'l2derivatives'
const TYPE_LAYER2_LEND = 'l2lend'
const TYPE_LIQUIDITY = 'liquidity'
const TYPE_CROSSCHAIN_DEX = 'crossdex'
const TYPE_STAKING = 'staking'
//
// const TYPE_OPTIMISTIC_ROLLUP = 'optimisticrollup'
// const TYPE_ZK_ROLLUP = 'zkrollup'
// const TYPE_STATE_CHANNEL = 'statechannel'

// chainId
const MAINNET = 1 // ethereum
// const MATIC = 137
const BSC = 57
const XDAI = 100

export const NOT_LAYER2 = [TYPE_SIDECHAIN, TYPE_PUBLICCHAIN, TYPE_STAKING]

export const typeMap = {
  [TYPE_LAYER2]: 'General',
  [TYPE_LAYER2_PAYMENT]: 'Payment',
  [TYPE_LAYER2_EXCHANGE]: 'DEX',
  [TYPE_LAYER2_DAO]: 'DAO',
  [TYPE_SIDECHAIN]: 'Side Chain',
  [TYPE_PUBLICCHAIN]: 'Public Chain',
  [TYPE_LAYER2_DERIVATIVES]: 'Derivatives',
  [TYPE_LAYER2_LEND]: 'Lend',
  [TYPE_LIQUIDITY]: 'Liquidity',
  [TYPE_CROSSCHAIN_DEX]: 'Crosschain DEX',
  [TYPE_STAKING]: 'Staking'
  // [TYPE_OPTIMISTIC_ROLLUP]: "Optimistic",
  // [TYPE_ZK_ROLLUP]: "Zk",
  // [TYPE_STATE_CHANNEL]: "State Channel",
}

export const getTypeMap = (type) => typeMap[type] || 'Unknown'

// https://hackmd.io/@kSCbGhceTL2d5BmUdh7pwg/ryCPqIk7_
// https://github.com/anyswap/anyswap-frontend/tree/vi-new/src/contexts/Tokens/tokens
const PROJECT_ANYSWAP = {
  name: 'AnySwap',
  website: 'https://anyswap.exchange/',
  twitter: 'https://twitter.com/AnyswapNetwork',
  github: 'https://github.com/anyswap',
  color: '#2f80ed',
  type: TYPE_CROSSCHAIN_DEX
}

const PROJECT_ARBITRUM = {
  name: 'Arbitrum One',
  explorer: "https://offchainlabs.com/",
  website: "https://offchainlabs.com/",
  github: "https://github.com/OffchainLabs/arbitrum",
  twitter: "https://twitter.com/OffchainLabs",
  color: "#9e5ddb",
  type: TYPE_LAYER2
}

// define in alphabetic order
const PROJECT_AZTEC = {
  name: 'Aztec', // required, name need to be able to use as key
  explorer: "https://explorer.aztec.network/",
  website: "https://aztec.network/",
  github: "https://github.com/AztecProtocol",
  twitter: "https://twitter.com/aztecprotocol",
  color: "#944af2", // required
  type: TYPE_LAYER2_PAYMENT // required
}

const PROJECT_AVALANCHE = {
  name: 'Avalanche',
  explorer: "https://cchain.explorer.avax.network/",
  website: "https://www.avax.network/",
  github: "https://github.com/ava-labs",
  twitter: "https://twitter.com/avalancheavax",
  color: "#e84142",
  type: TYPE_PUBLICCHAIN
}

// https://www.binance.org/en/assets-proof
const PROJECT_BINANCE_SMART_CHAIN = {
  name: 'Binance Smart Chain',
  explorer: "https://bscscan.com/",
  website: "https://www.binance.org/en/smartChain",
  github: "https://github.com/binance-chain/",
  twitter: "https://twitter.com/binancechain",
  color: "#f8d12f",
  type: TYPE_PUBLICCHAIN
}

const PROJECT_BOBA_NETWORK = {
  name: 'Boba Network',
  explorer: "https://blockexplorer.boba.network/",
  website: "https://boba.network",
  github: "https://github.com/omgnetwork",
  twitter: "https://twitter.com/bobanetwork",
  color: "#ccff00",
  type: TYPE_LAYER2
}

// https://github.com/connext/chaindata/blob/main/chains.json
const PROJECT_CONNEXT = {
  name: 'connext',
  website: "https://www.connext.network/",
  github: "https://github.com/connext",
  twitter: "https://twitter.com/connextnetwork",
  color: "#29c1fc",
  type: TYPE_LIQUIDITY
}

const PROJECT_DYDX = {
  name: 'dydx',
  website: "https://dydx.exchange/",
  github: "https://github.com/dydxprotocol",
  twitter: "https://twitter.com/dydxprotocol",
  color: "#6966FF",
  type: TYPE_LAYER2_EXCHANGE
}

const PROJECT_DIVERSIFY = {
  name: 'DeversiFi',
  website: "https://www.deversifi.com/",
  github: "https://github.com/deversifi",
  twitter: "https://twitter.com/deversifi",
  color: "#5500FC",
  type: TYPE_LAYER2_EXCHANGE
}

const PROJECT_ETH2 = {
  name: "ETH 2",
  website: "https://ethereum.org/en/eth2/",
  github: "https://github.com/ethereum/eth2.0-specs",
  twitter: "https://twitter.com/ethdotorg",
  color: "#747c84",
  type: TYPE_STAKING
}

const PROJECT_FANTOM = {
  name: 'Fantom',
  explorer: "https://explorer.fantom.network/",
  website: "https://fantom.foundation/",
  github: "https://github.com/Fantom-Foundation",
  twitter: "https://twitter.com/FantomFDN",
  color: "#1969ff",
  type: TYPE_PUBLICCHAIN
}

const PROJECT_FUEL = {
  name: 'Fuel',
  explorer: "https://mainnet.fuel.sh/network",
  website: "https://fuel.sh/",
  github: "https://github.com/fuellabs",
  twitter: "https://twitter.com/fuellabs_",
  color: "#04c399",
  type: TYPE_LAYER2_PAYMENT
}

const PROJECT_FUSION = {
  name: 'Fusion',
  explorer: "https://fsnex.com/blocks",
  website: "https://www.fusion.org/en",
  github: "https://github.com/FUSIONFoundation",
  twitter: "https://twitter.com/FUSIONProtocol",
  color: "#358dcc",
  type: TYPE_PUBLICCHAIN
}

const PROJECT_GLUON = {
  name: "GLUON",
  explorer: "https://gluon.leverj.io/",
  website: "https://gluon.network/",
  github: "https://github.com/leverj",
  twitter: "https://twitter.com/GluonNetwork",
  color: "#f7961c",
  type: TYPE_SIDECHAIN
}

const PROJECT_HABITAT = {
  name: 'Habitat',
  explorer: "https://0xhabitat.org/explorer/",
  website: "https://0xhabitat.org/",
  github: "https://github.com/0xHabitat",
  twitter: "https://twitter.com/EnterTheHabitat",
  color: "#FBDC60",
  type: TYPE_LAYER2_DAO
}

const PROJECT_HARMONY = {
  name: 'Harmony',
  explorer: "https://explorer.harmony.one/",
  website: "https://www.harmony.one/",
  github: "https://github.com/harmony-one",
  twitter: "https://harmony.one/twitter",
  color: "#00ade8",
  type: TYPE_PUBLICCHAIN
}

const PROJECT_HERMEZ = {
  name: 'Hermez',
  explorer: "https://explorer.hermez.io/",
  website: "https://hermez.io/",
  github: "https://github.com/hermeznetwork/",
  twitter: "https://twitter.com/hermez_network",
  color: "#e75a2b",
  type: TYPE_LAYER2_PAYMENT
}

const PROJECT_HUOBI_ECO_CHAIN = {
  name: 'HUOBI ECO CHAIN',
  explorer: "https://hecoinfo.com/",
  website: "https://www.hecochain.com/en-us/",
  github: "https://github.com/huobiGroup/",
  twitter: "https://twitter.com/HECO_Chain",
  color: "#01943f",
  type: TYPE_PUBLICCHAIN
}

const PROJECT_IMMUTABLEX = {
  name: 'ImmutableX',
  website: "https://www.immutable.com/",
  twitter: "https://twitter.com/immutable",
  color: "#24d1e9",
  type: TYPE_LAYER2_EXCHANGE
}

const PROJECT_LAYER2_FINANCE = {
  name: 'Layer2.Finance',
  website: "https://layer2.finance/",
  github: "https://github.com/celer-network/layer2-finance-contracts",
  twitter: "https://twitter.com/layer2finance",
  color: "#ca9979",
  type: TYPE_LAYER2_LEND
}

const PROJECT_LOOPRING = {
  name: 'Loopring',
  website: "https://loopring.org",
  github: "https://github.com/Loopring",
  twitter: "https://twitter.com/loopringorg",
  color: "#1c42ff",
  type: TYPE_LAYER2_EXCHANGE
}

const PROJECT_NEAR = {
  name: "NEAR",
  website: "https://near.org/",
  github: "https://github.com/near",
  twitter: "https://twitter.com/nearprotocol",
  color: "#111618",
  type: TYPE_PUBLICCHAIN
}

const PROJECT_OKEXCHAIN = {
  name: "OKExChain",
  explorer: "https://www.oklink.com/okexchain",
  website: "https://www.okex.com/okexchain",
  github: "https://github.com/okex/exchain",
  twitter: "https://twitter.com/OKExChain",
  color: "#205fec",
  type: TYPE_PUBLICCHAIN
}

const PROJECT_OMG = {
  name: 'OMG',
  explorer: "hhttps://blockexplorer.mainnet.v1.omg.network/",
  website: 'https://omg.network',
  github: 'https://github.com/omgnetwork',
  twitter: 'https://twitter.com/omgnetworkhq',
  color: "#4967ff",
  type: TYPE_LAYER2_PAYMENT
}

const PROJECT_OPTIMISM = {
  name: 'Optimism',
  explorer: "https://optimistic.etherscan.io/",
  website: "https://optimism.io/",
  github: "https://github.com/ethereum-optimism",
  twitter: "https://twitter.com/optimismPBC",
  color: "#f01a37",
  type: TYPE_LAYER2_DERIVATIVES
}

const PROJECT_POLYGON = {
  name: 'Polygon',
  explorer: "https://explorer-mainnet.maticvigil.com/",
  website: "https://polygon.technology/",
  github: "https://github.com/maticnetwork/",
  twitter: "https://twitter.com/maticnetwork",
  color: "#8248e5",
  type: TYPE_SIDECHAIN
}

const PROJECT_POLY_NETWORK = {
  name: 'PolyNetwork',
  explorer: "https://explorer.poly.network/",
  website: "https://www.poly.network/",
  github: "https://github.com/polynetwork",
  twitter: "https://twitter.com/PolyNetwork2",
  color: "#2222FF",
  type: TYPE_SIDECHAIN
}

const PROJECT_RSK = {
  name: 'RSK',
  explorer: "https://explorer.rsk.co/",
  website: "https://www.rsk.co/",
  twitter: "https://twitter.com/rsksmart",
  color: "#00b520",
  type: TYPE_SIDECHAIN
}

const PROJECT_SOLANA = {
  name: 'SOLANA',
  explorer: "https://explorer.solana.com/",
  website: "https://solana.com/",
  github: "https://github.com/solana-labs/",
  twitter: "https://twitter.com/",
  color: "#d83aeb",
  type: TYPE_PUBLICCHAIN
}

const PROJECT_SORARE = {
  name: 'sorare',
  website: "https://sorare.com/",
  twitter: "https://twitter.com/sorarehq",
  color: "#21284a",
  type: TYPE_LAYER2_EXCHANGE
}

const PROJECT_XDAI = {
  name: "xDai",
  explorer: "https://blockscout.com/poa/xdai/",
  website: "https://www.xdaichain.com/",
  twitter: "https://twitter.com/xdaichain",
  color: "#1ca9a6",
  type: TYPE_SIDECHAIN
}

const PROJECT_ZKSWAP = {
  name: "ZKSwap",
  explorer: "https://zkswap.info/en",
  website: "https://zks.app",
  github: "https://github.com/l2labs",
  twitter: "https://twitter.com/ZKSwapOfficial",
  color: "#596efd",
  type: TYPE_LAYER2_EXCHANGE
}

const PROJECT_ZKSYNC = {
  name: "zkSync",
  explorer: "https://zkscan.io/explorer/",
  website: "https://zksync.io/",
  github: "https://github.com/matter-labs/zksync",
  twitter: "https://twitter.com/zksync",
  color: "#8c8dfc",
  type: TYPE_LAYER2_PAYMENT
}

// not categorize as sidechain or layer 2, but provides liquidity
export const LIQUIDITY_PROJECTS = {
  [PROJECT_ANYSWAP.name]: PROJECT_ANYSWAP,
  [PROJECT_CONNEXT.name]: PROJECT_CONNEXT,
}

// define in alphabetic order
export const ETH_BRIDGE_CONTRACTS = {
  [PROJECT_ARBITRUM.name]: {
    "bridges": [
      {
        "address": "0x011B6E24FfB0B5f5fCc564cf4183C5BBBc96D515",
        "chainId": MAINNET,
        "name": "Ethereum Bridge",
        "website": "https://offchainlabs.com/"
      },
      // {
      //   "address": "0x86E525A3565235b2bb934df43E01c8B092c03756",
      //   "chainId": MAINNET,
      //   "name": "ERC20 Bridge",
      //   "website": "https://offchainlabs.com/"
      // }
    ],
    ...PROJECT_ARBITRUM,
  },
  [PROJECT_AZTEC.name]: {
    "bridges": [
      {
        "address": "0x737901bea3eeb88459df9ef1BE8fF3Ae1B42A2ba",
        "chainId": MAINNET,
        "name": "zk.money",
        "website": "https://zk.money/"
      }
    ],
    ...PROJECT_AZTEC,
  },
  [PROJECT_AVALANCHE.name]: {
    "bridges": [
      {
        "address": "0xdAC7Bb7Ce4fF441A235F08408e632FA1D799A147",
        "chainId": MAINNET,
        "name": "Avalanche-Ethereum Bridge",
        "website": "https://aeb.xyz/"
      },
      {
        "address": "0x820A9eb227BF770A9dd28829380d53B76eAf1209",
        "chainId": MAINNET,
        "name": "Anyswap Avalanche bridge",
        "project": PROJECT_ANYSWAP.name,
        "website": "https://anyswap.exchange/"
      }
    ],
    ...PROJECT_AVALANCHE,
  },
  [PROJECT_BINANCE_SMART_CHAIN.name]: {
    "bridges": [
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
        "project": PROJECT_ANYSWAP.name,
        "website": "https://app.nerve.fi/bridge"
      },
      {
        "address": "0x533e3c0e6b48010873B947bddC4721b1bDFF9648",
        "chainId": MAINNET,
        "name": "Anyswap BSC bridge",
        "project": PROJECT_ANYSWAP.name,
        "website": "https://anyswap.exchange/"
      },
    ],
    ...PROJECT_BINANCE_SMART_CHAIN,
  },
  [PROJECT_BOBA_NETWORK.name]: {
    "bridges": [
      {
        "address": "0xdc1664458d2f0B6090bEa60A8793A4E66c2F1c00",
        "chainId": MAINNET,
        "name": "L1 Standard Bridge"
      },
      {
        "address": "0x6b4eab8D55A4f701C3FE58bDb8b3e1f181eA7087",
        "chainId": MAINNET,
        "name": "L1 Liquidity Pool"
      }
    ],
    ...PROJECT_BOBA_NETWORK
  },
  // [PROJECT_CONNEXT.name]: {
  //   // https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/connext/index.js
  //   "bridges": [
  //     {
  //       "address": "0xdfa6edAe2EC0cF1d4A60542422724A48195A5071",
  //       "chainId": MAINNET,
  //       "name": "hub"
  //     },
  //     {
  //       "address": "0xe3cF69b86F274a14B87946bf641f11Ac837f4492",
  //       "chainId": MAINNET,
  //       "name": "router"
  //     },
  //     {
  //       "address": "0xe6887c0cc3c37cb2ee34Bc58AB258f36825CA910",
  //       "chainId": MAINNET,
  //       "name": "router"
  //     },
  //     {
  //       "address": "0xE540998865aFEB054021dc849Cc6191b8E09dC08",
  //       "chainId": MAINNET,
  //       "name": "ETH router"
  //     },
  //     // {
  //     //   "address": "0xC6C68811E75EfD86d012587849F1A1D30427361d",
  //     //   "chainId": MAINNET,
  //     //   "name": "BSC router"
  //     // },
  //   ],
  //   ...PROJECT_CONNEXT,
  // },
  [PROJECT_DYDX.name]: {
    "bridges": [
      {
        "address": "0xD54f502e184B6B739d7D27a6410a67dc462D69c8",
        "chainId": MAINNET,
      }
    ],
    ...PROJECT_DYDX
  },
  [PROJECT_DIVERSIFY.name]: {
    "bridges": [
      {
        "address": "0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b",
        "chainId": MAINNET,
      }
    ],
    ...PROJECT_DIVERSIFY
  },
  [PROJECT_ETH2.name]: {
    "bridges": [
      {
        "address": "0x00000000219ab540356cbb839cbe05303d7705fa",
        "chainId": MAINNET,
        "name": "ETH2 Staking",
        "website": "https://launchpad.ethereum.org/en/"
      },
    ],
    ...PROJECT_ETH2
  },
  [PROJECT_FANTOM.name]: {
    "bridges": [
      {
        "address": "0x65e64963b755043CA4FFC88029FfB8305615EeDD",
        "chainId": MAINNET,
        "name": "Anyswap Fantom bridge",
        "project": PROJECT_ANYSWAP.name,
        "website": "https://anyswap.exchange/"
      },
      { // also use for BSC tokens
        "address": "0xC564EE9f21Ed8A2d8E7e76c085740d5e4c5FaFbE",
        "chainId": MAINNET,
        "name": "Anyswap Fantom bridge",
        "project": PROJECT_ANYSWAP.name,
        "website": "https://anyswap.exchange/"
      },
      {
        "address": "0xBe008e52c5682A49dd0260735a26Aa221f303456",
        "chainId": MAINNET,
        "name": "Anyswap Fantom bridge",
        "project": PROJECT_ANYSWAP.name,
        "website": "https://anyswap.exchange/"
      },
      {
        "address": "0x9A8C4bdCd75CFa1059A6E453Ac5cE9d3F5c82A35",
        "chainId": MAINNET,
        "name": "Fantom Bridge"
      }
    ],
    ...PROJECT_FANTOM
  },
  // [PROJECT_FUEL.name]: {
  //   "bridges": [
  //     {
  //       "address": "0x6880f6Fd960D1581C2730a451A22EED1081cfD72",
  //       "chainId": MAINNET,
  //     }
  //   ],
  //   ...PROJECT_FUEL
  // },
  [PROJECT_FUSION.name]: {
    "bridges": [
      {
        "address": "0x46290B0c3A234E3d538050d8F34421797532A827",
        "chainId": MAINNET,
        "name": "Anyswap Fusion bridge",
        "project": PROJECT_ANYSWAP.name,
        "website": "https://anyswap.exchange/"
      },
    ],
    ...PROJECT_FUSION
  },
  [PROJECT_GLUON.name]: {
    // https://live.leverj.io/futures/api/v1/all/config assets
    "bridges": [
      {
        "address": "0x75ace7a086ea0fb1a79e43cc6331ad053d8c67cb",
        "chainId": MAINNET,
        "name": "GLUON bridge",
        "project": PROJECT_GLUON.name,
        "website": "https://gluon.network/"
      },
      // assets
      {
        "address": "0xBbff34E47E559ef680067a6B1c980639EEb64D24",
        "chainId": MAINNET,
        "name": "L2 bridge",
      },
      {
        "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "chainId": MAINNET,
        "name": "USDT bridge",
      },
    ],
    ...PROJECT_GLUON
  },
  [PROJECT_HABITAT.name]: {
    "bridges": [
      {
        "address": "0x96E471B5945373dE238963B4E032D3574be4d195",
        "chainId": MAINNET,
      }
    ],
    ...PROJECT_HABITAT
  },
  [PROJECT_HARMONY.name]: {
    // https://github.com/harmony-one/ethhmy-bridge.sdk/blob/main/src/configs/mainnet.ts
    "bridges": [
      {
        "address": "0xfD53b1B4AF84D59B20bF2C20CA89a6BeeAa2c628",
        "chainId": MAINNET,
        "name": "BUSD bridge"
      },
      {
        "address": "0xfE601dE9D4295274b9904D5a9Ad7069F23eE2B32",
        "chainId": MAINNET,
        "name": "LINK bridge"
      },
      {
        "address": "0x2dCCDB493827E15a5dC8f8b72147E6c4A5620857",
        "chainId": MAINNET,
        "name": "ERC20 bridge"
      },
      {
        "address": "0xF9Fb1c508Ff49F78b60d3A96dea99Fa5d7F3A8A6",
        "chainId": MAINNET,
        "name": "ETH bridge"
      }
      // {
      //   "address": "0x426A61A2127fDD1318Ec0EdCe02474f382FdAd30",
      //   "name": "ERC721 manager"
      // }
    ],
    ...PROJECT_HARMONY
  },
  [PROJECT_HERMEZ.name]: {
    "bridges": [
      {
        "address": "0xA68D85dF56E733A06443306A095646317B5Fa633",
        "chainId": MAINNET,
      }
    ],
    ...PROJECT_HERMEZ
  },
  [PROJECT_HUOBI_ECO_CHAIN.name]: {
    "bridges": [
      // https://docs.hecochain.com/#/hecobridge
      {
        "address": "0xa929022c9107643515f5c777ce9a910f0d1e490c",
        "chainId": MAINNET,
        "name": "Huobi ECO Chain bridge",
      },
      {
        "address": "0xD779967F8B511C5edf39115341B310022900eFED",
        "chainId": MAINNET,
        "name": "connext HECO bridge",
        "project": PROJECT_ANYSWAP.name
      },
    ],
    ...PROJECT_HUOBI_ECO_CHAIN
  },
  [PROJECT_IMMUTABLEX.name]: {
    "bridges": [
      {
        "address": "0x5FDCCA53617f4d2b9134B29090C87D01058e27e9",
        "chainId": MAINNET,
      }
    ],
    ...PROJECT_IMMUTABLEX
  },
  // https://etherscan.io/address/0xFe81ab6930A30BdaE731fe7b6C6ABFbEAFc014a8#readContract
  // the main address's token balance will flow to other DEFI periodically,
  // need to track strategies TVL
  [PROJECT_LAYER2_FINANCE.name]: {
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
        "staked": ["curve"]
      },
      {//11
        "address": "0x3D3092560d48c02f524dfb3fa3CAdDc8A5717751",
        "chainId": MAINNET,
        "name": "Curve3Pool USDC",
        "staked": ["curve"]
      },
      {//12
        "address": "0xca222c64b7f3ca0322356fA19e9A09a13bE71e06",
        "chainId": MAINNET,
        "name": "Curve3Pool USDT",
        "staked": ["curve"]
      },
    ],
    ...PROJECT_LAYER2_FINANCE
  },
  [PROJECT_LOOPRING.name]: {
    "bridges": [
      {
        "address": "0x674bdf20A0F284D710BC40872100128e2d66Bd3f",
        "chainId": MAINNET,
      }
    ],
    ...PROJECT_LOOPRING
  },
  [PROJECT_NEAR.name]: {
    "bridges": [
      {
        "address": "0x23ddd3e3692d1861ed57ede224608875809e127f",
        "chainId": MAINNET,
        "name": "Rainbow bridge"
      }
    ],
    ...PROJECT_NEAR
  },
  [PROJECT_OKEXCHAIN.name]: {
    // https://www.okex.com/cross-chain-gateway
    "bridges": [
      {
        "address": "0x2c8fbb630289363ac80705a1a61273f76fd5a161",
        "chainId": MAINNET,
        "name": "OKExChain bridge"
      }
    ],
    ...PROJECT_OKEXCHAIN
  },
  [PROJECT_OMG.name]: {
    "bridges": [
      {
        "address": "0x3Eed23eA148D356a72CA695DBCe2fceb40a32ce0",
        "chainId": MAINNET,
        "name": "ETH bridge"
      },
      {
        "address": "0x070cB1270A4B2bA53c81CeF89d0FD584Ed4F430B",
        "chainId": MAINNET,
        "name": "ERC20 bridge"
      }
    ],
    ...PROJECT_OMG
  },
  [PROJECT_OPTIMISM.name]: {
    "bridges": [
      // old snx bridge
      {
        "address": "0x5fd79d46eba7f351fe49bff9e87cdea6c821ef9f",
        "chainId": MAINNET,
        "name": "old Synthetix bridge"
      },
      // https://github.com/makerdao/optimism-dai-bridge
      {
        "address": "0x467194771dAe2967Aef3ECbEDD3Bf9a310C76C65",
        "chainId": MAINNET,
        "name": "Optimism Dai Bridge"
      },
      {
        "address": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1",
        "chainId": MAINNET,
        "name": "Optimism Gateway"
      }
    ],
    ...PROJECT_OPTIMISM
  },
  [PROJECT_POLYGON.name]: {
    // https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json
    // https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/polygon/index.js
    "bridges": [
      {
        "address": "0x8484Ef722627bf18ca5Ae6BcF031c23E6e922B30",
        "chainId": MAINNET,
        "name": "PoS Ether bridge"
      },
      {
        "address": "0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf",
        "chainId": MAINNET,
        "name": "PoS ERC20 bridge",
        "protocol": ["dhedge", "synthetix", "mushroom", "aave"]
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
        "project": PROJECT_ANYSWAP.name,
      },
    ],
    ...PROJECT_POLYGON
  },
  [PROJECT_POLY_NETWORK.name]: {
    // https://github.com/polynetwork/docs/blob/master/config/README.md
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
    ...PROJECT_POLY_NETWORK
  },
  [PROJECT_RSK.name]: {
    // https://developers.rsk.co/tools/tokenbridge/contractaddresses/
    "bridges": [
      {
        "address": "0x12ed69359919fc775bc2674860e8fe2d2b6a7b5d",
        "name": "Bridge",
        "chainId": MAINNET,
      }
    ],
    ...PROJECT_RSK
  },
  [PROJECT_SOLANA.name]: {
    "bridges": [
      {
        "address": "0xeae57ce9cc1984F202e15e038B964bb8bdF7229a",
        "name": "Wormhole Bridge",
        "chainId": MAINNET,
      }
    ],
    ...PROJECT_SOLANA
  },
  [PROJECT_SORARE.name]: {
    "bridges": [
      {
        "address": "0xF5C9F957705bea56a7e806943f98F7777B995826",
        "name": "starkware",
        "chainId": MAINNET,
      },
    ],
    ...PROJECT_SORARE
  },
  [PROJECT_XDAI.name]: {
    // https://www.xdaichain.com/about-xdai/news-and-information/comparisons/matic#similarities-and-differences
    // https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/xdai/index.js
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
        "protocol": ["sushiswap", "synthetix", "uniswap"]
      },
      {
        "address": "0xed7e6720ac8525ac1aeee710f08789d02cd87ecb",
        "chainId": MAINNET,
        "name": "owl bridge"
      },
      {
        "address": "0x2F10c5eE93ac666dA72195abA8a49FD6D27fA02F",
        "chainId": MAINNET,
        "name": "Anyswap XDAI bridge",
        "project": PROJECT_ANYSWAP.name
      },
    ],
    ...PROJECT_XDAI
  },
  [PROJECT_ZKSWAP.name]: {
    "bridges": [
      {
        "address": "0x8eca806aecc86ce90da803b080ca4e3a9b8097ad",
        "chainId": MAINNET,
        "name": "ZKSwap (v1)",
      },
      {
        "address": "0x6dE5bDC580f55Bc9dAcaFCB67b91674040A247e3",
        "chainId": MAINNET,
        "name": "ZKSwap (v2)",
      }
    ],
    ...PROJECT_ZKSWAP
  },
  [PROJECT_ZKSYNC.name]: {
    "bridges": [
      {
        "address": "0xaBEA9132b05A70803a4E85094fD0e1800777fBEF",
        "chainId": MAINNET,
      }
    ],
    ...PROJECT_ZKSYNC
  }
}

// WIP
export const XDAI_BRIDGE_CONTRACTS = {
  "xDai": {
    // https://www.xdaichain.com/for-users/bridges/converting-xdai-via-bridge/transfer-sai-dai-without-the-ui-using-web3-or-mobile-wallet
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
}

// WIP
export const BSC_BRIDGE_CONTRACTS = {
  "PolyNetwork": {
    // https://github.com/polynetwork/docs/blob/master/config/README.md
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
