/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [items,setItems] = useState([])
  return <CartContext.Provider value={{items,setItems}}>{props.children}</CartContext.Provider>;
};
