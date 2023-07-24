import './App.css';
import inputData from './data/Wine-Data.json';
import FlavanoidUtility from './components/FlavanoidUtility';
import GammaUtility from './components/GammaUtility';

function App() {
  return (
    <div className="App">
      <div className="header">Data Visualization Task</div>
      <FlavanoidUtility data={ inputData }/>
      <GammaUtility data={ inputData }/>
    </div>
  );
}

export default App;
