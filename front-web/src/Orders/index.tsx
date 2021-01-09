import { useEffect, useState } from 'react'; 
import './styles.css';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { Product } from './Types';
import { fetchProducts } from './api';
import OrderLocation from './Orderlocation';



function Orders() {
      const [products,setProducts] = useState<Product[]>([]);
        

useEffect(() =>{ 
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error =>console.log(error))
}, []);

    return (
        <div className="orders-container">
           <StepsHeader />
           <ProductsList products={products} />
           <OrderLocation />
        </div>
    )
}

export default Orders;