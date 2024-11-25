import "./App.css";
import Card from "./components/Card";

function App() {
 
  return (
    <>
      <h1 className="bg-green-900 text-white p-3 rounded-xl mb-2">
        Hi Kapil Welcome tO React+Vite with Tailwind CSS
      </h1>
     <Card myName="Piku Sarkar" category="Software Engineer"/>
     <Card myName="John Cena" />
    </>
  );
}

export default App;
