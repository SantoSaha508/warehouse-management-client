import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Manage.css';

const Manage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const allow = window.confirm("Are you sure to delete?");
        if(allow){
            const url = ``;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deleteCount > 0){
                    console.log("deleted");
                    const remaning = products.filter(user => user._id !== id);
                    setProducts(remaning);
                }
            })
        }
    }

    return (
        <div>
            <h1 className='text-center bg-primary p-3 mt-4'>Inventory Items: {products.length}</h1>
            <div className='productsContainer'>
                {
                    products.map(product => <ManageProduct
                        key={product.id}
                        product={product}
                    ></ManageProduct>)
                }
            </div>
            <button onClick={handleDelete}  className='btn bg-primary w-100 '>
                Delete</button>
        </div>
    );
};

export default Manage;