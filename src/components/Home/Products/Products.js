import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://damp-savannah-41395.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div>
            <h1 className='
           inventoryItem text-center p-3 mt-4'>Inventory Items: {products.length}</h1>
            <div className='productsContainer'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>).slice(0, 6)
                }
            </div>
            
        </div>
    );
};

export default Products;