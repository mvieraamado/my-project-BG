import React, {useState, useEffect} from 'react';
import getProducts from '../services/service';

const ProductList = ({selectProduct, deleteProduct})=>{
    const [products, setProducts] = useState([]);
    useEffect (()=>{
        getProducts().then(response => {
            setProducts(response.data);
        }).catch(error => {
            console.log('There was an error fetching the products!', error);
        })
    }, [])

    return(
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => selectProduct(product)}>Edit</button>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;