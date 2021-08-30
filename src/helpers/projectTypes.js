export const TYPE_LAYER2 = 'layer2'
export const TYPE_LAYER2_PAYMENT = 'l2payment'
export const TYPE_LAYER2_EXCHANGE = 'l2ex'
export const TYPE_LAYER2_DAO = 'l2dao'
export const TYPE_SIDECHAIN = 'sidechain'
export const TYPE_PUBLICCHAIN = 'publicchain'
export const TYPE_LAYER2_DERIVATIVES = 'l2derivatives'
export const TYPE_LAYER2_LEND = 'l2lend'
export const TYPE_LIQUIDITY = 'liquidity'
export const TYPE_CROSSCHAIN_DEX = 'crossdex'
export const TYPE_STAKING = 'staking'
//
// const TYPE_OPTIMISTIC_ROLLUP = 'optimisticrollup'
// const TYPE_ZK_ROLLUP = 'zkrollup'
// const TYPE_STATE_CHANNEL = 'statechannel'

export const typeMap = {
  [TYPE_LAYER2]: 'General',
  [TYPE_LAYER2_PAYMENT]: 'Payment',
  [TYPE_LAYER2_EXCHANGE]: 'DEX',
  [TYPE_LAYER2_DAO]: 'DAO',
  [TYPE_SIDECHAIN]: 'Side Chain',
  [TYPE_PUBLICCHAIN]: 'Public Chain',
  // [TYPE_LAYER2_DERIVATIVES]: 'Derivatives',
  [TYPE_LAYER2_LEND]: 'Lend',
  [TYPE_LIQUIDITY]: 'Liquidity',
  [TYPE_CROSSCHAIN_DEX]: 'Crosschain DEX',
  [TYPE_STAKING]: 'Staking'
  // [TYPE_OPTIMISTIC_ROLLUP]: "Optimistic",
  // [TYPE_ZK_ROLLUP]: "Zk",
  // [TYPE_STATE_CHANNEL]: "State Channel",
}
