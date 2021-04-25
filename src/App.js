import {useRoutes} from 'hookrouter'
import { routes } from './view/routes'
import { NotFound } from './view/NotFound'

import { version as webVersion } from '../package.json'

function App() {
  const Route = useRoutes(routes)
  return (
    <div className="App">
      {Route || <NotFound/>}
    </div>
  );
}

console.log('ethhole.link v', webVersion, 'go https://github.com/gasolin/ethhole to learn more')

export default App;
