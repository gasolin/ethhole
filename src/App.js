

import chainData from './data/data'
import { Nav } from './components/Nav'
import { Table } from './components/Table'
import { TableRow } from './components/TableRow'

function App() {
  // console.log('%O', chainData)
  const projects = Object.keys(chainData)
    .filter(proj => proj !== 'ethereum')
    .sort((a, b) => chainData[b].tvl - chainData[a].tvl)
  const ethUsdPrice = chainData.ethereum.usd
  return (
    <div className="App">
      <Nav ethUsdPrice={ethUsdPrice}/>
      <Table>
        {projects.map(proj => <TableRow key={proj} ethUsdPrice={ethUsdPrice} name={proj} data={chainData} />)}
      </Table>
    </div>
  );
}

export default App;
