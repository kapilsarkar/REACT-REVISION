import { useState } from "react"
import SecondCompo from "./SecondCompo"
import { UserContext } from "../context/UserContext"

const FirstCompo = ()=>{
    const [user,setUser] = useState({id:101,fullName:"Kapil Sarkar"});
    const [text,setText] = useState("Hello I am Text")
    return(
        <>
         <UserContext.Provider value={{user,text}}>
            <SecondCompo/>
         </UserContext.Provider>
        </>
    )
}

export default FirstCompo