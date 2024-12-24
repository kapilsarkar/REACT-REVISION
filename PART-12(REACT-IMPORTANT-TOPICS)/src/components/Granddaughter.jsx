import { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";
const Granddaughter = () => {
  const secret = useContext(FamilyContext);
  return (
    <>
      <div>
        <h3>{`GrandDaughter ${secret.familyName}`} </h3>
        <p>{secret.onlyGrandChildrenShouldKnow()}</p>
      </div>
    </>
  );
};

export default Granddaughter;
