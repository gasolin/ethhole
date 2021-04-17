const TYPE_LAYER2 = 'layer2'
// const TYPE_SIDECHAIN = 'sidechain'
const mainnet = 1 // ethereum

export const ETH_BRIDGE_CONTRACTS = {
  "Aztec": {
    "bridges": [
      {
        "address": "0x737901bea3eeb88459df9ef1BE8fF3Ae1B42A2ba",
      }
    ],
    "chain": mainnet,
    "website": "https://zk.money",
    "type": TYPE_LAYER2
  },
  "dydx": {
    "bridges": [
      {
        "address": "0xD54f502e184B6B739d7D27a6410a67dc462D69c8",
      }
    ],
    "chain": mainnet,
    "website": "https://dydx.exchange/",
    "type": TYPE_LAYER2
  },
  "DeversiFi": {
    "bridges": [
      {
        "address": "0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b",
      }
    ],
    "chain": mainnet,
    "website": "https://www.deversifi.com/",
    "type": TYPE_LAYER2
  },
  "Fuel": {
    "bridges": [
      {
        "address": "0x6880f6Fd960D1581C2730a451A22EED1081cfD72",
      }
    ],
    "chain": mainnet,
    "website": "https://fuel.sh/",
    "type": TYPE_LAYER2
  },
  "ImmutableX": {
    "bridges": [
      {
        "address": "0x5FDCCA53617f4d2b9134B29090C87D01058e27e9",
      }
    ],
    "website": "https://www.immutable.com/",
    "type": TYPE_LAYER2
  },
  "Loopring": {
    "bridges": [
      {
        "address": "0x674bdf20A0F284D710BC40872100128e2d66Bd3f",      }
    ],
    "chain": mainnet,
    "website": "https://loopring.org",
    "type": TYPE_LAYER2
  },
  "Optimism": {
    "bridges": [
      {
        "address": "0x045e507925d2e05D114534D0810a1abD94aca8d6",
      }
    ],
    "chain": mainnet,
    "website": "https://optimism.io/",
    "type": TYPE_LAYER2
  },
  "ZKSwap": {
    "bridges": [
      {
        "address": "0x8eca806aecc86ce90da803b080ca4e3a9b8097ad",
      }
    ],
    "chain": mainnet,
    "website": "https://zkswap.info/en",
    "type": TYPE_LAYER2
  },
  "zkSync": {
    "bridges": [
      {
        "address": "0xaBEA9132b05A70803a4E85094fD0e1800777fBEF",
      }
    ],
    "chain": mainnet,
    "website": "https://zksync.io/",
    "type": TYPE_LAYER2
  }
}
