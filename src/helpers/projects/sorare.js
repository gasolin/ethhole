import { TYPE_LAYER2_EXCHANGE } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'sorare',
  website: "https://sorare.com/",
  twitter: "https://twitter.com/sorarehq",
  color: "#21284a",
  type: TYPE_LAYER2_EXCHANGE,
  bridges: [
    {
      "address": "0xF5C9F957705bea56a7e806943f98F7777B995826",
      "name": "starkware",
      "chainId": MAINNET,
    },
  ],
}

export default project
