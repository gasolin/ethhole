import {useRoutes} from 'hookrouter'
import { routes } from './view/routes'
import { NotFound } from './view/NotFound'

function App() {
  const Route = useRoutes(routes)
  return (
    <div className="App">
      {Route || <NotFound/>}
    </div>
  );
}

export default App;
