import "./App.css";
import Family from "./components/Family";

import { FamilyContext } from "./context/FamilyContext";

const familySecret = {
  familyName: "The Smiths",
  onlyParentCanSee: () => {
    return `The Smiths are the best!`;
  },
  onlyGrandChildrenShouldKnow: () => {
    return `They are the best!`;
  },
};
function App() {
  return (
    <>
      <div>
        <h1 className=" bg-slate-900 text-white p-2 ">
          REACT IMPORTANT TOPICS
        </h1>

        <FamilyContext.Provider value={familySecret}>
          <Family />
        </FamilyContext.Provider>
      </div>
    </>
  );
}

export default App;
