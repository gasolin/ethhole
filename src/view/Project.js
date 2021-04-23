import human from 'millify'

import chainData from '../data/data'
// import { TotalValueLocked } from '../components/TotalValueLocked'
import { Panel } from '../components/Panel'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

export const Project = ({proj}) => {
  console.log('>>> ', proj, chainData[proj].bridges.length)
  const price =  chainData.ethereum.usd
  const symbol = '$' //price !== 1 ? 'Ξ' : '$'
  return (
    <>
      <Nav ethUsdPrice={price}/>
      <Panel>
        <h3>{proj}</h3>
      </Panel>
      {chainData[proj].bridges.map((bridge, idx) => {
        // console.log('%O', bridge)
        return (
          <Panel key={idx}>
            <h3>Bridge {bridge.name || idx + 1}</h3>
            {bridge.items.filter(item => item.quote > 1).map(item => {
              // console.log('%O', item)
              return (
                <div>{item.contract_ticker_symbol} {symbol} {human(item.quote * price)}</div>
              )
            })}
          </Panel>
        )
      })}
      <Footer/>
    </>
  )
}
