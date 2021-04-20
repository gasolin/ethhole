import { useState } from "react";

import chainData from './data/data'
import { Nav } from './components/Nav'
import { TotalValueLocked } from './components/TotalValueLocked'
import { Table } from './components/Table'
import { TableRow } from './components/TableRow'
import { Panel } from './components/Panel'
import { BalanceFlow } from './components/BalanceFlow'
import { Footer } from './components/Footer'

function App() {
  const [showEth, setShowEth] = useState(false);

  // console.log('%O', chainData)
  const projects = Object.keys(chainData)
    .filter(proj => proj !== 'ethereum')
    .sort((a, b) => chainData[b].tvl - chainData[a].tvl)
  const ethUsdPrice = showEth ? 1 : chainData.ethereum.usd
  return (
    <div className="App">
      <Nav ethUsdPrice={ethUsdPrice}/>
      <Panel>
        <BalanceFlow projects={projects} data={chainData} price={ethUsdPrice} />
      </Panel>
      <Panel>
        <TotalValueLocked projects={projects} data={chainData} price={ethUsdPrice} setShowEth={setShowEth} />
      </Panel>
      <Table>
        {projects.map(proj => <TableRow key={proj} price={ethUsdPrice} name={proj} data={chainData} />)}
      </Table>
      <Footer/>
    </div>
  );
}

export default App;
