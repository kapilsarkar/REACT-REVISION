import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SecondCompo = ()=>{
    const {user,text} = useContext(UserContext)
    return(
        <>
        <div>
            <h3>{user.id}</h3>
            <h3>{user.fullName}</h3>
            <h3>{text}</h3>
        </div>
        </>
    )
}

export default SecondCompo;