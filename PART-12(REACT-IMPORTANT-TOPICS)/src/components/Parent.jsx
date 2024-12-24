import { FamilyContext } from "../context/FamilyContext";
import { useContext } from "react";
import Child from "./Child";

const Parent = () => {
  const secret = useContext(FamilyContext)
  return (
    <>
      <h1>{`Parent ${secret.familyName}`}</h1>
      <p>{secret.onlyParentCanSee()}</p>
      <Child/>
    </>
  );
};

export default Parent;
