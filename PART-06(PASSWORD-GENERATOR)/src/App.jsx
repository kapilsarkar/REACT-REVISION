import { useState } from "react";

function App() {
  const [length,setLength] = useState(8)
  return (
    <>
      <h2 className="bg-yellow-500 text-white p-5 text-center font-bold text-2xl">
        PASSWORD GENERATOR
      </h2>
    </>
  );
}

export default App;
