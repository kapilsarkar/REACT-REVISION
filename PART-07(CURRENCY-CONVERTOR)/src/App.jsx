import { createContext} from "react";
import ChildA from "./ChildA";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";


const data = createContext();
const data2 = createContext();
function App() {
  const myName = "Kapil Sarkar";
  const gender = "Male";

  return (
    <>
      <h2 className=" bg-zinc-700 text-white">
        PROP DRILLING,USE-CONTEXT HOOK
      </h2>
      <data.Provider value={myName}>
        <data2.Provider value={gender}>
          <ChildA />
        </data2.Provider>
      </data.Provider>
      <h2 className="bg-zinc-700 text-white">CUSTOM HOOKS</h2>
       <Counter1/>
       <Counter2/>
    </>
  );
}

export default App;
// eslint-disable-next-line react-refresh/only-export-components
export { data, data2 };
