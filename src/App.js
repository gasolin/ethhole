import {useRoutes} from 'hookrouter'
import { routes } from './view/routes'
import { NotFound } from './view/NotFound'
import {DAppProvider, ChainId} from '@usedapp/core'

import { version as webVersion } from '../package.json'

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: 'https://eth-mainnet.zerion.io/'
  }
}

function App() {
  const Route = useRoutes(routes)
  return (
    <DAppProvider config={config}>
      <div className="App">
        {Route || <NotFound/>}
      </div>
    </DAppProvider>
  );
}

console.log('ethhole.link v', webVersion, 'go https://github.com/gasolin/ethhole to learn more')

export default App;
