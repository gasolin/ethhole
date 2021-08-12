import {A, useTitle} from 'hookrouter'
import human from 'millify'

import { useChainData } from '../hooks/useChainData'
import { Panel } from '../components/Panel'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { TotalSupply } from '../components/TotalSupply'

const WBTC = '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
const TETHER = '0xdac17f958d2ee523a2206206994597c13d831ec7'
const USDC = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
// const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f'

export const Flow = () => {
  const [chainData, timestamp] = useChainData()
  useTitle('Flow In')

  const price =  chainData?.ethereum?.usd || 1

  return (
    <>
      <Nav ethUsdPrice={price} timestamp={timestamp} />
      <Panel>
        <TotalSupply name={'WBTC'} tokenAddress={WBTC} />
        <TotalSupply name={'TETHER'} tokenAddress={TETHER} />
        <TotalSupply name={'USDC'} tokenAddress={USDC} />
        {/* <TotalSupply name={'DAI'} tokenAddress={DAI} /> */}
      </Panel>
      <Footer/>
    </>
  )
}
