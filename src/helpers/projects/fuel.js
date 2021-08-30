import { TYPE_LAYER2_PAYMENT } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Fuel',
  explorer: "https://mainnet.fuel.sh/network",
  website: "https://fuel.sh/",
  github: "https://github.com/fuellabs",
  twitter: "https://twitter.com/fuellabs_",
  color: "#04c399",
  type: TYPE_LAYER2_PAYMENT
  // bridges: [
  //   {
  //     "address": "",  // required
  //     "chainId": MAINNET,  // required
  //     "name": "Ethereum Bridge",
  //     "website": "https://"
  //   },
  // ]
}

export default project
