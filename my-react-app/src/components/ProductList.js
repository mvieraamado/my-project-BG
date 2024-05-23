
import { useEffect, useState } from 'react';
import { getProducts } from '../services/service';

const ProductList = ({ selectProduct, deleteProduct }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        refreshProducts();
    }, []);

    const refreshProducts = () => {
        getProducts().then(response => {
            setProducts(response.data);
        }).catch(error => {
            console.error('There was an error fetching the products!', error);
        });
    };

    const handleDelete = (productId) => {
        deleteProduct(productId).then(() => {
            refreshProducts();
        }).catch(error => {
            console.error('There was an error deleting the product!', error);
        });
    };

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => selectProduct(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;