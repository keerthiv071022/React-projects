// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
const Product=()=>{
    // const {id}=useParams()
    const location=useLocation()
    const params=new URLSearchParams(location.search)
    const id=params.get('id')

    return(
        
        <>
        
        <Navbar/>
<h1>product id:{id}</h1>
        </>
    )
}
export default Product
