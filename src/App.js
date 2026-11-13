import drizzleOptions from './drizzleOptions'
import { Drizzle, generateStore } from '@drizzle/store';
import { DrizzleContext } from "@drizzle/react-plugin"
import './App.css';
const drizzleStore = generateStore(drizzleOptions)
const drizzle = new Drizzle(drizzleOptions, drizzleStore)
function App() {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <div className="App">
        <h1>React/Drizzle and truffle</h1>
      </div>
    </DrizzleContext.Provider>
  );
}

export default App;