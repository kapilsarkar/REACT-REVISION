import { useParams } from "react-router-dom"

const User = ()=>{
    const {userid} = useParams()
    return(
        <>
        <div className=" bg-gray-600 text-white text-center p-3 text-2xl">User:{userid}</div>
        </>
    )
}

export default User