const TYPE_LAYER2 = 'layer2'
const TYPE_LAYER2_PAYMENT = 'l2payment'
const TYPE_LAYER2_EXCHANGE = 'l2ex'
// const TYPE_SIDECHAIN = 'sidechain'
const mainnet = 1 // ethereum

export const ETH_BRIDGE_CONTRACTS = {
  "Aztec": {
    "bridges": [
      {
        "address": "0x737901bea3eeb88459df9ef1BE8fF3Ae1B42A2ba",
      }
    ],
    "chainId": mainnet,
    "website": "https://zk.money",
    "type": TYPE_LAYER2_PAYMENT
  },
  "dydx": {
    "bridges": [
      {
        "address": "0xD54f502e184B6B739d7D27a6410a67dc462D69c8",
      }
    ],
    "chainId": mainnet,
    "website": "https://dydx.exchange/",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "DeversiFi": {
    "bridges": [
      {
        "address": "0x5d22045DAcEAB03B158031eCB7D9d06Fad24609b",
      }
    ],
    "chainId": mainnet,
    "website": "https://www.deversifi.com/",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "Fuel": {
    "bridges": [
      {
        "address": "0x6880f6Fd960D1581C2730a451A22EED1081cfD72",
      }
    ],
    "chainId": mainnet,
    "website": "https://fuel.sh/",
    "type": TYPE_LAYER2_PAYMENT
  },
  "ImmutableX": {
    "bridges": [
      {
        "address": "0x5FDCCA53617f4d2b9134B29090C87D01058e27e9",
      }
    ],
    "chainId": mainnet,
    "website": "https://www.immutable.com/",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "Loopring": {
    "bridges": [
      {
        "address": "0x674bdf20A0F284D710BC40872100128e2d66Bd3f",      }
    ],
    "chainId": mainnet,
    "website": "https://loopring.org",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "Optimism": {
    "bridges": [
      {
        "address": "0x045e507925d2e05D114534D0810a1abD94aca8d6",
      }
    ],
    "chainId": mainnet,
    "website": "https://optimism.io/",
    "type": TYPE_LAYER2
  },
  "ZKSwap": {
    "bridges": [
      {
        "address": "0x8eca806aecc86ce90da803b080ca4e3a9b8097ad",
      }
    ],
    "chainId": mainnet,
    "website": "https://zkswap.info/en",
    "type": TYPE_LAYER2_EXCHANGE
  },
  "zkSync": {
    "bridges": [
      {
        "address": "0xaBEA9132b05A70803a4E85094fD0e1800777fBEF",
      }
    ],
    "chainId": mainnet,
    "website": "https://zksync.io/",
    "type": TYPE_LAYER2_PAYMENT
  }
}
