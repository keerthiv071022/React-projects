function ProductCard({product}){
    return(
        <div className="card">
<img src={product.thumbnail} alt={product.title}/>
<h2>{product.title}</h2>
<p>{product.description}</p>
<h3>{product.price}</h3>
<p>{product.rating}</p>
<p>Brand:{product.brand}</p>
<p>Category:{product.category}</p>
<p>Stock:{product.stock}</p>
        </div>
    )
}

export default ProductCard