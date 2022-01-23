import {
  TYPE_SIDECHAIN,
  TYPE_PUBLICCHAIN,
  TYPE_STAKING,
  typeMap,
} from './projectTypes.js'
import { BSC, XDAI } from './chainInfo.js'

import anyswap from './projects/anyswap.js'
import connext from './projects/connext.js'
import cbridge from './projects/cbridge.js'

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
import habitat from './projects/habitat.js'
import harmony from './projects/harmony.js'
import hermez from './projects/hermez.js'
import heco from './projects/heco.js'
import hop from './projects/hop.js'
import immutablex from './projects/immutablex.js'
import layer2finance from './projects/layer2finance.js'
import loopring from './projects/loopring.js'
import moonriver from './projects/moonriver.js'
import metis from './projects/metis.js'
import near from './projects/near.js'
import okex from './projects/okex.js'
import omg from './projects/omg.js'
import optics from './projects/optics.js'
import optimism from './projects/optimism.js'
import orbit from './projects/orbit.js'
import polygon from './projects/polygon.js'
import polynetwork from './projects/polynetwork.js'
import ronin from './projects/ronin.js'
import rsk from './projects/rsk.js'
import solana from './projects/solana.js'
import sorare from './projects/sorare.js'
import xdai from './projects/xdai.js'
import zkswap from './projects/zkswap.js'
import zksync from './projects/zksync.js'
import iotex from './projects/iotex.js'

export const NOT_LAYER2 = [TYPE_SIDECHAIN, TYPE_PUBLICCHAIN, TYPE_STAKING]

export const getTypeMap = (type) => typeMap[type] || 'Unknown'

// define in alphabetic order

// not categorize as sidechain or layer 2, but provides liquidity
export const LIQUIDITY_PROJECTS = {
  [anyswap.name]: anyswap,
  [connext.name]: connext,
  [cbridge.name]: cbridge,
  [hop.name]: hop,
  [optics.name]: optics,
  [orbit.name]: orbit,
}

// define in alphabetic order
export const ETH_BRIDGE_CONTRACTS = {
  [arbitrum.name]: arbitrum,
  [aztec.name]: aztec,
  [avalanche.name]: avalanche,
  [bsc.name]: bsc,
  [boba.name]: boba,
  [cbridge.name]: cbridge,
  [connext.name]: connext,
  [dydx.name]: dydx,
  [deversifi.name]: deversifi,
  [eth2.name]: eth2,
  [fantom.name]: fantom,
  [fusion.name]: fusion,
  [gluon.name]: gluon,
  [habitat.name]: habitat,
  [harmony.name]: harmony,
  [hermez.name]: hermez,
  [heco.name]: heco,
  [hop.name]: hop,
  [immutablex.name]: immutablex,
  [layer2finance.name]: layer2finance,
  [loopring.name]: loopring,
  [metis.name]: metis,
  [moonriver.name]: moonriver,
  [near.name]: near,
  [okex.name]: okex,
  [omg.name]: omg,
  [optics.name]: optics,
  [optimism.name]: optimism,
  [orbit.name]: orbit,
  [polygon.name]: polygon,
  [polynetwork.name]: polynetwork,
  [ronin.name]: ronin,
  [rsk.name]: rsk,
  [solana.name]: solana,
  [sorare.name]: sorare,
  [xdai.name]: xdai,
  [zkswap.name]: zkswap,
  [zksync.name]: zksync,
  [iotex.name]: iotex,
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
