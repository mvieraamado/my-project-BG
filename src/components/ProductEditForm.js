import { useEffect, useState } from 'react';
import { updateProduct, getProducts } from '../services/service';

const ProductEditForm = ({ productId, refreshProducts, clearSelectedProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (productId) {
            getProducts(productId).then(response => {
                const product = response.data;
                setName(product.name);
                setDescription(product.description);
                setPrice(product.price);
            }).catch(error => {
                console.error('There was an error fetching the product!', error);
            });
        }
    }, [productId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = { name, description, price: parseFloat(price) };
        updateProduct(productId, product).then(() => {
            refreshProducts();
            clearSelectedProduct();
        }).catch(error => {
            console.error('There was an error updating the product!', error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Product</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
            <button type="submit">Save</button>
        </form>
    );
};

export default ProductEditForm;