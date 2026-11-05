import { useEffect,useState } from "react";
import axios from "axios";
import ProductCard from './ProductCard';
import { Link } from "react-router-dom";
function ProductList(){
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState("")

    useEffect(()=>{
        async function fetchProducts() {//"async - This function can do time-consuming work." if await is used async should be there .
            try{
                const response=await axios.get("https://dummyjson.com/products")//await means wait until the work is finished before moving to the next line.It doesn't freeze your whole app. The browser and React can still do other work, like showing the "Loading..." message
                console.log(response);// data in json
                setProducts(response.data.products)// [] products will now have all the data
                
            }catch(err){
                setError("Unable to fetch Products")

            }finally{
                setLoading(false)
            }
        }
        fetchProducts();



    },[]);//It does not run immediately while rendering.,"Run this effect ONLY after the component is displayed for the first time."

    if(loading){
        return <h2>Loading...</h2>
    }
    if(error){
        return<h2>{error}</h2>
    }
    return(
        <div className="container">
            {
                    products.map((product)=>(//map lopps thgrough every product
                        // <ProductCard key={product.id}//The key is only for React. It helps React identify each list item when the list changes (items added, removed, or reordered). It is not available inside ProductCard as a prop.
                        // product={product}/>
                        <Link
    key={product.id}
    to={`/product/${product.id}`}
    style={{ textDecoration: "none", color: "inherit" }}
>
    <ProductCard product={product} />
</Link>
                    ))

            }
            
             </div>
    )

}
    export default ProductList;
