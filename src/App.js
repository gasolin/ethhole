import human from 'human-format'

import chainData from './data/data'
// import logo from './logo.svg';
import './App.css';

function App() {
  // console.log('%O', chainData)
  const projects = Object.keys(chainData)
    .sort((a, b) => chainData[b].tvl - chainData[a].tvl)
  return (
    <div className="App">
      <header className="App-header">
        {projects.map(proj => <p key={proj}>{proj} ♦
{human(chainData[proj].tvl)}</p>)}
      </header>
    </div>
  );
}

export default App;
