import drizzleOptions from './drizzleOptions'
import { Drizzle, generateStore } from '@drizzle/store';
import { DrizzleContext } from "@drizzle/react-plugin"
import './App.css';
import Container from './components/Container';
import MyComponent from './components/MyComponent';
const drizzleStore = generateStore(drizzleOptions)
const drizzle = new Drizzle(drizzleOptions, drizzleStore)
function App() {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {
          (drizzleContext) => {
            const { drizzle, drizzleState, initialized } = drizzleContext;
            if (!initialized) {
              return "Loading...";
            }
            return <MyComponent drizzle={drizzle}
              drizzleState={drizzleState} ></MyComponent>;
          }
        }
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider >
  );
}

export default App;