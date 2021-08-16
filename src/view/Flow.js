import {A, useTitle} from 'hookrouter'
import human from 'millify'

import { useChainData } from '../hooks/useChainData'
import { Panel } from '../components/Panel'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { SupplyTable } from '../components/SupplyTable'
import { TotalSupplyRow } from '../components/TotalSupplyRow'

const WBTC = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
const renBTC = '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d'
const pTokenBTC = '0x5228a22e72ccc52d415ecfd199f99d0665e7733b'
const TETHER = '0xdac17f958d2ee523a2206206994597c13d831ec7'
const USDC = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
const BUSD = '0x4fabb145d64652a948d72533023f6e7a623c7c53'
const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f'

export const Flow = () => {
  const [chainData, timestamp] = useChainData()
  useTitle('Flow In')

  const price =  chainData?.ethereum?.usd || 1

  return (
    <>
      <Nav ethUsdPrice={price} timestamp={timestamp} />
      <Panel>
        <SupplyTable>
          <TotalSupplyRow name={'WBTC'} tokenAddress={WBTC} type={'BTC'} />
          <TotalSupplyRow name={'renBTC'} tokenAddress={renBTC} type={'BTC'} />
          <TotalSupplyRow name={'pToken BTC'} tokenAddress={pTokenBTC} type={'BTC'} />
          <TotalSupplyRow name={'TETHER'} tokenAddress={TETHER} type={'USD'} />
          <TotalSupplyRow name={'USDC'} tokenAddress={USDC} type={'USD'} />
          <TotalSupplyRow name={'BUSD'} tokenAddress={BUSD} type={'USD'} />
          <TotalSupplyRow name={'DAI'} tokenAddress={DAI} type={'USD'} />
        </SupplyTable>
      </Panel>
      <Footer/>
    </>
  )
}
