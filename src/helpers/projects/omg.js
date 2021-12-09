import { TYPE_LAYER2_PAYMENT } from '../projectTypes.js'
import { MAINNET } from '../chainInfo.js'

export const project = {
  name: 'OMG',
  explorer: "hhttps://blockexplorer.mainnet.v1.omg.network/",
  website: 'https://omg.network',
  github: 'https://github.com/omgnetwork',
  twitter: 'https://twitter.com/omgnetworkhq',
  color: "#4967ff",
  type: TYPE_LAYER2_PAYMENT,
  bridges: [
    {
      "address": "0x3Eed23eA148D356a72CA695DBCe2fceb40a32ce0",
      "chainId": MAINNET,
      "name": "ETH bridge"
    },
    {
      "address": "0x070cB1270A4B2bA53c81CeF89d0FD584Ed4F430B",
      "chainId": MAINNET,
      "name": "ERC20 bridge",
      "excludeAddr": [
        "0x49d716dfe60b37379010a75329ae09428f17118d",
      ],
    },
  ]
}

export default project
