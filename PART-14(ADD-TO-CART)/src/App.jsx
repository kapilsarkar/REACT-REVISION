import Cart from "./components/Cart";
import Item from "./components/Item";

function App() {
  return (
    <>
      <h1>Add To Cart</h1>
      <Item name="MacBook Pro" price={10000}/>
      <Item name="Pendrive" price={5000}/>
      <Item name="Mobile" price={36000}/>
      <Cart/>
    </>
  );
}

export default App;
