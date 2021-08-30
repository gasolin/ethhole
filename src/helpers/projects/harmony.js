import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Harmony',
  explorer: "https://explorer.harmony.one/",
  website: "https://www.harmony.one/",
  github: "https://github.com/harmony-one",
  twitter: "https://harmony.one/twitter",
  color: "#00ade8",
  type: TYPE_PUBLICCHAIN,
  // https://github.com/harmony-one/ethhmy-bridge.sdk/blob/main/src/configs/mainnet.ts
  bridges: [
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
  ]
}

export default project
