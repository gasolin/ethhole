import { TYPE_PUBLICCHAIN } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'Tezos', // required, name need to be able to use as key
  // explorer: "https://",
  website: "https://tezos.com/",
  github: "https://github.com/tezos/tezos",
  twitter: "https://twitter.com/tezos",
  color: "#0f62ff", // required
  type: TYPE_PUBLICCHAIN, // required
  bridges: [
    {
      "address": "0x5Dc76fD132354be5567ad617fD1fE8fB79421D82",  // required
      "chainId": MAINNET,  // required
      "name": "Wrap Protocol",
      "website": "https://app.tzwrap.com/wrap"
    },
  ]
}

export default project
