import { useState } from "react"

import chainData from '../data/data'
import { TotalValueLocked } from '../components/TotalValueLocked'
import { ProjectsTable } from '../components/ProjectsTable'
import { ProjectTableRow } from '../components/ProjectTableRow'
import { Panel } from '../components/Panel'
import { BalanceFlow } from '../components/BalanceFlow'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

// console.log('%O', chainData)
const projects = Object.keys(chainData)
  .filter(proj => proj !== 'ethereum')
  .sort((a, b) => chainData[b].tvl - chainData[a].tvl)

export const Main = () => {
  const [showEth, setShowEth] = useState(false);
  const price = showEth ? 1 : chainData.ethereum.usd
  return (<>
    <Nav ethUsdPrice={price}/>
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
