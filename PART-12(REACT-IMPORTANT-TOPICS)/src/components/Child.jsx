import Granddaughter from "./Granddaughter";
import Grandson from "./Granson";
import { FamilyContext } from "../context/FamilyContext";
import { useContext } from "react";
const Child = () => {
  const secret = useContext(FamilyContext);
  return (
    <>
      <div>
        <h2>{`Children : ${secret.familyName}`}</h2>
        <Grandson />
        <Granddaughter />
      </div>
    </>
  );
};

export default Child;
