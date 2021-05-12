import {A, useTitle} from 'hookrouter'
import human from 'millify'

import { useChainData } from '../hooks/useChainData'
import { ETH_BRIDGE_CONTRACTS } from '../data/bridge_contracts'
import { Panel } from '../components/Panel'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { ProjectMetas } from '../components/ProjectMetas'
import { TotalValueTracked } from '../components/TotalValueTracked'
import { TokensTable } from '../components/TokensTable'
import { TokenTableRow } from '../components/TokenTableRow'
import { TokensTree } from '../components/TokensTree'
import { FILLTER } from '../helpers/constants'

export const Project = ({proj}) => {
  const [chainData, timestamp] = useChainData()
  useTitle(proj)

  const projectData = chainData[proj]

  if (!projectData) return null

  const price =  chainData?.ethereum?.usd || 1
  const threshold = FILLTER / price
  // TODO: support toggle symbol
  const symbol = '$' //price !== 1 ? 'Ξ' : '$'
  const tvl = projectData.tvl

  return (
    <>
      <Nav ethUsdPrice={price} timestamp={timestamp} />
      <Panel>
        <ProjectMetas proj={proj} />
      </Panel>
      <Panel>
        <TotalValueTracked price={price} tvl={tvl} ></TotalValueTracked>
      </Panel>
      {projectData.bridges
        // .sort((a, b) => b.tvl - a.tvl)
        .map((bridge, idx) => {
        // console.log('%O', bridge)
        const bridgesMeta = ETH_BRIDGE_CONTRACTS[proj].bridges
        const tokens = bridge.items.filter(item => item.quote > threshold)
        const bridgeName = bridgesMeta[idx]?.name || `Bridge ${idx + 1}`
        const bridgeLink = bridgesMeta[idx]?.website
          ? <a href={bridgesMeta[idx].website} className="text-blue-500 underline whitespace-no-wrap" target="_blank" rel="noreferrer">{bridgeName}</a>
          : <span>{bridgeName}</span>
        const bridgeProvider = bridgesMeta[idx]?.project
        return (
          <Panel key={idx}>
            <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200">
              <div className="flex items-center">
                <p className="text-md text-black dark:text-white ml-2">
                {bridgeLink}{' '}
                <a href={`https://etherscan.io/address/${bridge.address}`} target="_blank" rel="noreferrer" alt="smart contract">📝</a>
                {' '}({symbol}{human(bridge.tvl * price)})
                {bridgeProvider && <> by <A className="text-blue-500 underline whitespace-no-wrap" href={`/liquidity/${bridgeProvider}`}>{bridgeProvider}</A></>}
                </p>
              </div>
            </div>
            <TokensTree project={proj} tokens={tokens} price={price} />
            <TokensTable>
            {tokens.map((item, idx) => {
              // console.log('%O', item)
              const symbol = item.contract_ticker_symbol
              return (
                <TokenTableRow key={symbol} idx={idx} tokenData={item} bridge={bridge.address} sum={`$${human(item.quote * price)}`} />
              )
            })}
            </TokensTable>
          </Panel>
        )
      })}
      <Footer/>
    </>
  )
}
