import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ProductDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchProduct() {

            try {

                const response = await axios.get(
                    `https://dummyjson.com/products/${id}`
                );

                setProduct(response.data);

            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();

    }, [id]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
            <div>
                <div className="button" style={{ marginBottom: "20px" }}>
        <button onClick={() => navigate(-1)}>
            Back
        </button>
    </div>
        <div className="details" style={{ padding: "30px" }}>
            
            <img
                src={product.thumbnail}
                alt={product.title}
                width="350"
            />

            <h1>{product.title}</h1>

            <h2>₹ {product.price}</h2>

            <p>{product.description}</p>

            <h3>Brand : {product.brand}</h3>

            <h3>Category : {product.category}</h3>

            <h3>Rating : {product.rating}</h3>

            <h3>Stock : {product.stock}</h3>

        </div>
        </div>

    );
}

export default ProductDetails;