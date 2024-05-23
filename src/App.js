import {  useState } from "react";
import './App.css';
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { deleteProduct, getProducts } from "./services/service";
import ProductEditForm from "./components/ProductEditForm";

const App = ()=> {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const refreshProducts = () => {
      getProducts().then(response => {
          setProducts(response.data);
      }).catch(error => {
          console.error('There was an error fetching the products!', error);
      });
  };

  const selectProduct = (product) => {
      setSelectedProduct(product);
  };

  const clearSelectedProduct = () => {
      setSelectedProduct(null);
  };

  return (
      <div className="App">
          <header className="App-header">
              <h1>My Product App</h1>
          </header>
          <ProductList selectProduct={selectProduct} deleteProduct={deleteProduct} refreshProducts={refreshProducts} products={products} />
          {selectedProduct ? (
              <ProductEditForm productId={selectedProduct.id} refreshProducts={refreshProducts} clearSelectedProduct={clearSelectedProduct} />
          ) : (
              <ProductForm refreshProducts={refreshProducts} />
          )}
      </div>
  );
}


export default App;
