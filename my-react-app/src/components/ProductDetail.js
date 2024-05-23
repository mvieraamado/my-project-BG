import { useEffect, useState } from "react"
import { getProduct } from "../services/service";

const ProductDetail = ({productId})=>{
    const [product, setProduct] = useState(null);
    
    useEffect(()=> {
        getProduct(productId).then(response => {
            setProduct(response.data);
        }).catch(error => {
            console.log('There was an error fetching the product!', error)
        })
    }, [productId]);

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default ProductDetail;