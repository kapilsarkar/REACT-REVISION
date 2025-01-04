import { useContext } from "react";
import { CartContext } from "../context/context";

/* eslint-disable react/prop-types */
const Item = (props) => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <div className="item-card">
        <h2>Item Name: {props.name}</h2>
        <p>Price : ${props.price}</p>
        <button
          onClick={() =>
            cart.setItems([
              ...cart.items,
              { name: props.name, price: props.price },
            ])
          }
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default Item;
