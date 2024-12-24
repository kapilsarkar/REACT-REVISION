import { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";
const Grandson = () => {
  const secret = useContext(FamilyContext)
  return (
    <>
      <div>
        <h3>{`Grandson : ${secret.familyName}`}</h3>
        <p>{secret.onlyGrandChildrenShouldKnow()}</p>
      </div>
    </>
  );
};

export default Grandson;
