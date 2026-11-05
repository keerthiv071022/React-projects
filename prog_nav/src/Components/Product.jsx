import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
const Product=()=>{
    const{id}=useParams()
    return(

        <>
        <Navbar/>
        <h1>product id:{id}</h1>
        
        
        
        </>
    )
}

export default Product
