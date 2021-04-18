import React from 'react'
import {Sankey, LineSeriesPoint} from 'react-vis'

import { ETH_BRIDGE_CONTRACTS } from '../data/bridge_contracts.js'

const ETH_COLOR = '#747c84' //'#8facee'
const LINK_COLOR = '#babcbc' //'#ecf0f1',

export const BalanceFlow = React.memo(({ data, projects, width = 400 }) => {
  const THRESHOLD = 10000
  // console.log('%O', data)
  const entries = projects
    .filter(proj => data[proj].tvl > THRESHOLD)
  const rests = projects.filter(proj => !entries.includes(proj))
  // const nodes = [
  //   {name: 'Ethereum'},
  //   {name: 'others'},
  // ]
  const nodes = [
    {name: 'Ethereum', color: ETH_COLOR},
    ...entries.map((entry) => ({
      name: entry,
      color: ETH_BRIDGE_CONTRACTS[entry].color,
    })),
    {name: 'Others'},
  ]

  // https://vis4.net/palettes/#/9|d|3a5cbc,7eb1a6,ffffe0|ffffe0,ff005e,93003a|1|1
  // const pallete = ['#3a5cbc', '#6c87b7', '#97b0bb', '#c7d8c9', '#ffffe0', '#ffbcaf', '#f4777f', '#cf3759', '#93003a'];
  // [
  //   {source: 0, target: 1, value: 61.60},
  //   {source: 0, target: 2, value: 31.32},
  //   {source: 0, target: 4, value: 2.73},
  // ];
  const mainLinks = entries.map((entry, idx) => ({
    source: 0,
    target: idx + 1,
    value: data[entry].tvl,
    color: idx < 3 ? ETH_BRIDGE_CONTRACTS[entry].color : LINK_COLOR,
  }))
  // const restShare = entries.reduce(
  //   (a, c) => a - c.share,
  //   100
  // )
  const restShare = rests.reduce((a,c)=> a + data[c].tvl, 0)
  const links = [...mainLinks,
    {
      source: 0,
      target: entries.length + 1,
      value: restShare,
      color: LINK_COLOR,
    }
  ]
  // console.log('%O', links)
  // if (container === null) {
  //   return null
  // }

  return (
    <Sankey
      nodes={nodes}
      links={links}
      margin={{ left: 50, right: 10, top: 10, bottom: 40 }}
      height={300}
      width={width}
    />
  )
})
