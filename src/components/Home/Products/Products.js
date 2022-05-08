import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div>
            <h1 className='text-center bg-primary p-3 mt-4'>Inventory Items: {products.length}</h1>
            <div className='productsContainer'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <button className='bg-primary '>See All---</button>
        </div>
    );
};

export default Products;