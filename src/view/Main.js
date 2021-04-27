import { useState } from "react"

import { useChainData } from '../hooks/useChainData'
import { TotalValueLocked } from '../components/TotalValueLocked'
import { ProjectsTable } from '../components/ProjectsTable'
import { ProjectTableRow } from '../components/ProjectTableRow'
import { Panel } from '../components/Panel'
import { BalanceFlow } from '../components/BalanceFlow'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

const FILTEROUT = ['ethereum', 'fuse']
// console.log('%O', chainData)
export const Main = () => {
  const [chainData, timestamp] = useChainData()
  const [showEth, setShowEth] = useState(false)

  const projects = Object.keys(chainData)
  .filter(proj => !FILTEROUT.includes(proj))
  .sort((a, b) => chainData[b].tvl - chainData[a].tvl)
  // console.log('projects %O', projects)

  const price = showEth ? 1 : chainData?.ethereum?.usd || 1
  return (<>
    <Nav ethUsdPrice={price} timestamp={timestamp} />
    <Panel>
      <BalanceFlow projects={projects} data={chainData} price={price} />
    </Panel>
    <Panel>
      <TotalValueLocked projects={projects} data={chainData} price={price} setShowEth={setShowEth} />
    </Panel>
    <Panel>
      <ProjectsTable>
        {projects.map(proj => <ProjectTableRow key={proj} price={price} name={proj} data={chainData} />)}
      </ProjectsTable>
    </Panel>
    <Footer/>
  </>)
}
