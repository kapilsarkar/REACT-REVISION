import { useContext } from "react";
import { data,data2 } from "./App" ;
const ChildC = () => {
    const name = useContext(data);
    const gender = useContext(data2);
  return (
    <>
      <h2>Hi my Name is {name} and my gender is {gender}</h2>
    </>
  );
};

export default ChildC;
