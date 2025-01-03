import { useContext } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { CounterContext } from "./context/Counter";

function App() {
  const counterState = useContext(CounterContext)

  console.log(counterState)
  return <>
   <h1>REACT CONTEXT API</h1>
   <h2>Count is {counterState.count}</h2>
   <Counter/>
   <Counter/>
   <Counter/>
   <Counter/>
   <Counter/>
  </>;
}

export default App;
