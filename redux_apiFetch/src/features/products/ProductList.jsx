import { useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchProducts } from "./productSlice";

function ProductList(){
    const dispatch=useDispatch();
    const {items,loading,error}=useSelector(
        (state)=>state.products
    );
    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);
    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>{error}</h2>;
    return(
        <div>
            <h1>Products</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            {items.map((product)=>(
<div
key={product.id}
style={{
border:"1px solid grey",
padding:"10px",
borderRadius:"8px"
}}>
    <img src={product.thumbnail}
            alt={product.title}
            width="150"/>

            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
</div>

        )
    )}
    </div>

    </div>
)}
export default ProductList;
