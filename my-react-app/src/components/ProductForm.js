import { useState } from "react"
import { createProduct } from "../services/service";

const ProductForm = ({refreshProducts})=> {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState ('');

    const handleSubmit = (e)=>  {
        e.preventDefault();
        const product ={ name, description, price: parseFloat(price)};

        createProduct(product).then(()=> {
            refreshProducts();
            setName('');
            setDescription('');
            setPrice('');
        }).catch( error => {
            console.error('There was an error creating the product!', error);
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
            <button type="submit">Add</button>
        </form>
    );
};

export default ProductForm;