const TYPE_LAYER2 = 'layer2'
const TYPE_LAYER2_PAYMENT = 'l2payment'
const TYPE_LAYER2_EXCHANGE = 'l2ex'
const TYPE_SIDECHAIN = 'sidechain'

// chainId
const MAINNET = 1 // ethereum
// const MATIC = 137
// const BSC = 57
// const XDAI = 100

export const typeMap = {
  [TYPE_LAYER2]: 'General',
  [TYPE_LAYER2_PAYMENT]: 'Payment',
  [TYPE_LAYER2_EXCHANGE]: 'DEX',
  [TYPE_SIDECHAIN]: 'SIDE CHAIN',
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
    "website": "https://aztec.network/",
    "color": "#944af2",
    "type": TYPE_LAYER2_PAYMENT
  },
  // https://docs.connext.network/connext-MAINNET
  "connext": {
    "bridges": [
      {
        "address": "0xE540998865aFEB054021dc849Cc6191b8E09dC08",
        "chainId": MAINNET,
      },
      // {
      //   "address": "0xE540998865aFEB054021dc849Cc6191b8E09dC08",
      //   "chainId": MATIC,
      // },
      // {
      //   "address": "0xE540998865aFEB054021dc849Cc6191b8E09dC08",
      //   "chainId": BSC,
      // },
      // {
      //   "address": "0xE540998865aFEB054021dc849Cc6191b8E09dC08",
      //   "chainId": XDAI,
      // },
    ],
    "website": "https://www.connext.network/",
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
    "website": "https://fuel.sh/",
    "color": "#04c399",
    "type": TYPE_LAYER2_PAYMENT
  },
  "Hermez": {
    "bridges": [
      {
        "address": "0xA68D85dF56E733A06443306A095646317B5Fa633",
        "chainId": MAINNET
      }
    ],
    "explorers": [
      {
        "explorer": "https://explorer.hermez.io/",
        "name": "Hermez Batch Explorer"
      }
    ],
    "website": "https://hermez.io/",
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
    "color": "#24d1e9",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "Loopring": {
    "bridges": [
      {
        "address": "0x674bdf20A0F284D710BC40872100128e2d66Bd3f",
        "chainId": MAINNET,
      }
    ],
    "website": "https://loopring.org",
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
    "website": "https://optimism.io/",
    "color": "#f01a37",
    "type": TYPE_LAYER2
  },
  // https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json
  "Polygon": {
    "bridges": [
      {
        "address": "0x401F6c983eA34274ec46f84D70b31C151321188b",
        "chainId": MAINNET,
        "name": "Plasma bridge"
      },
      {
        "address": "0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf",
        "chainId": MAINNET,
        "name": "PoS ERC20 bridge"
      },
      {
        "address": "0x8484Ef722627bf18ca5Ae6BcF031c23E6e922B30",
        "chainId": MAINNET,
        "name": "PoS ether bridge"
      }
    ],
    "website": "https://polygon.technology/",
    "color": "#8248e5",
    "type": TYPE_SIDECHAIN
  },
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
    "website": "https://www.xdaichain.com/",
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
    "website": "https://zkswap.info/en",
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
    "website": "https://zksync.io/",
    "color": "#8c8dfc",
    "type": TYPE_LAYER2_PAYMENT
  }
}
