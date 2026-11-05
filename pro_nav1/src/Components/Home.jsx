import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate =useNavigate()
    const prodNavigate=useNavigate()
    const getproduct=(id)=>{
        
        // prodNavigate(`/product/${id}`)
        prodNavigate(`/product/?id=${id}`)
    }
    return(
<>
<Navbar/>
<h1>Home</h1>
<button onClick={()=>navigate('/about')}>Click me to toggle </button>
<button onClick={()=>getproduct(1111)}>Product</button>

</>


    )
}
export default Home