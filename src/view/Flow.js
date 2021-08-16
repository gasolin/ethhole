import {A, useTitle} from 'hookrouter'
import human from 'millify'

import { useChainData } from '../hooks/useChainData'
import { Panel } from '../components/Panel'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { SupplyTable } from '../components/SupplyTable'
import { TotalSupplyRow } from '../components/TotalSupplyRow'

// https://www.gemini.com/cryptopedia/wrapped-bitcoin-vs-bitcoin-wbtc-tbtc-wnxm-hbtc-crypto
const supplyTokens = [
  {
    name: 'TETHER',
    tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    type: 'USD',
  },
  {
    name: 'USDC',
    tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    type: 'USD',
  },
  {
    name: 'BUSD',
    tokenAddress: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
    type: 'USD',
  },
  {
    name: 'WBTC',
    tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    type: 'BTC',
  },
  {
    name: 'DAI',
    tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    type: 'USD',
  },
  {
    name: 'HBTC',
    tokenAddress: '0x0316EB71485b0Ab14103307bf65a021042c6d380',
    type: 'BTC',
  },
  {
    name: 'renBTC',
    tokenAddress: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
    type: 'BTC',
  },
  {
    name: 'sBTC',
    tokenAddress: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
    type: 'BTC',
  },
  {
    name: 'pTokenBTC',
    tokenAddress: '0x5228a22e72ccc52d415ecfd199f99d0665e7733b',
    type: 'BTC',
  },
  {
    name: 'oBTC',
    tokenAddress: '0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68',
    type: 'BTC',
  },
  {
    name: 'imBTC',
    tokenAddress: '0x3212b29E33587A00FB1C83346f5dBFA69A458923',
    type: 'BTC',
  },
  {
    name: 'tBTC',
    tokenAddress: '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa',
    type: 'BTC',
  },
]

export const Flow = () => {
  const [chainData, timestamp] = useChainData()
  useTitle('Flow In')

  const price =  chainData?.ethereum?.usd || 1

  return (
    <>
      <Nav ethUsdPrice={price} timestamp={timestamp} />
      <Panel>
        <SupplyTable>
          {supplyTokens.map(token => (
            <TotalSupplyRow
              name={token.name}
              tokenAddress={token.tokenAddress}
              type={token.type}
            />
          ))}
        </SupplyTable>
      </Panel>
      <Footer/>
    </>
  )
}
