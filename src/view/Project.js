import human from 'millify'

import chainData from '../data/data'
import { ETH_BRIDGE_CONTRACTS } from '../data/bridge_contracts.js'
// import { TokensTree } from '../components/TokensTree'
// import { TotalValueLocked } from '../components/TotalValueLocked'
import { Panel } from '../components/Panel'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { TokensTable } from '../components/TokensTable'
import { TokenTableRow } from '../components/TokenTableRow'

export const Project = ({proj}) => {
  const projMeta = ETH_BRIDGE_CONTRACTS[proj]
  // const tvl = price === 1 ? `Ξ ${human(project.tvl)}` : `$ ${human(project.tvl * price)}`
  const price =  chainData.ethereum.usd
  const symbol = '$' //price !== 1 ? 'Ξ' : '$'
  return (
    <>
      <Nav ethUsdPrice={price}/>
      <Panel>
        <h1>{projMeta.color && (<div className="flex flex-row flex-shrink-0">
          <a href={projMeta.website} target="_blank" className="block relative pr-2" style={{color: projMeta.color}} rel="noreferrer">
              ●
          </a> {proj}
        </div>)}</h1>
        <hr/>
        {projMeta.website && (
          <div>
            <span>Website: </span>
            <a href={projMeta.website} target="_blank" rel="noreferrer" className="text-blue-500 underline whitespace-no-wrap">{projMeta.website}</a>
          </div>
        )}
        {projMeta.explorer && (
          <div>
            <span>Explorer: </span>
            <a href={projMeta.explorer} target="_blank" rel="noreferrer" className="text-blue-500 underline whitespace-no-wrap">{projMeta.explorer}</a>
          </div>
        )}
        <div>Total Value Locked: {symbol} {human(chainData[proj].tvl * price)}</div>
      </Panel>
      {chainData[proj].bridges.map((bridge, idx) => {
        // console.log('%O', bridge)
        return (
          <Panel key={idx}>
            <h2>Bridge {bridge.name || idx + 1} <a href={`https://etherscan.io/address/${bridge.address}`} target="_blank" rel="noreferrer">🔎</a></h2>
            {/* <TokensTree project={proj} tokens={bridge.items} /> */}
            <TokensTable>
            {bridge.items.filter(item => item.quote > 1).map(item => {
              // console.log('%O', item)
              const symbol = item.contract_ticker_symbol
              return (
                <TokenTableRow key={symbol} token={symbol} sum={`${symbol} ${human(item.quote * price)}`} logo_url={item.logo_url} />
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
