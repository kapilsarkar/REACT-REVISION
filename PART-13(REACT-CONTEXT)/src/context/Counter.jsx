/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  const [count, setCount] = useState(5);
  return (
    <CounterContext.Provider value={{ count, setCount,name: "Kapil Sarkar" }}>
      {props.children}
    </CounterContext.Provider>
  );
};
