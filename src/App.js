import { useState } from "react";
import {useRoutes} from 'hookrouter'

import chainData from './data/data'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { routes } from './view/routes'

function App() {
  const Route = useRoutes(routes)
  const [showEth, setShowEth] = useState(false);
  const ethUsdPrice = showEth ? 1 : chainData.ethereum.usd
  return (
    <div className="App">
      <Nav ethUsdPrice={ethUsdPrice}/>
        <Route price={ethUsdPrice} setShowEth={setShowEth} />
      <Footer/>
    </div>
  );
}

export default App;
