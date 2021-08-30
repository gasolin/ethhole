import {
  TYPE_LAYER2,
  TYPE_LAYER2_PAYMENT,
  TYPE_LAYER2_EXCHANGE,
  TYPE_LAYER2_DAO,
  TYPE_SIDECHAIN,
  TYPE_PUBLICCHAIN,
  TYPE_LAYER2_LEND,
  TYPE_STAKING,
  typeMap,
} from './projectTypes.js'
import { BSC, MAINNET, XDAI } from './chainInfo.js'

import anyswap from './projects/anyswap.js'
import connext from './projects/connext.js'

import arbitrum from './projects/arbitrum.js'
import aztec from './projects/aztec.js'
import avalanche from './projects/avalanche.js'
import bsc from './projects/bsc.js'
import boba from './projects/boba.js'
import dydx from './projects/dydx.js'
import deversifi from './projects/deversifi.js'
import eth2 from './projects/eth2.js'
import fantom from './projects/fantom.js'
import fusion from './projects/fusion.js'
import gluon from './projects/gluon.js'

export const NOT_LAYER2 = [TYPE_SIDECHAIN, TYPE_PUBLICCHAIN, TYPE_STAKING]

export const getTypeMap = (type) => typeMap[type] || 'Unknown'

// define in alphabetic order

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
  type: TYPE_LAYER2
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
  [anyswap.name]: anyswap,
  [connext.name]: connext,
}

// define in alphabetic order
export const ETH_BRIDGE_CONTRACTS = {
  [arbitrum.name]: arbitrum,
  [aztec.name]: aztec,
  [avalanche.name]: avalanche,
  [bsc.name]: bsc,
  [boba.name]: boba,
  [dydx.name]: dydx,
  [deversifi.name]: deversifi,
  [eth2.name]: eth2,
  [fantom.name]: fantom,
  [fusion.name]: fusion,
  [gluon.name]: gluon,
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
        "project": anyswap.name
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
        "project": anyswap.name,
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
        "project": anyswap.name
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
