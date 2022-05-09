import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Manage.css';

const Manage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://damp-savannah-41395.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handleDelete = id =>{
        const allow = window.confirm('You dare to delete !');
        if(allow){
            console.log('deleting user with id, ', id);
            const url = `https://damp-savannah-41395.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = products.filter(user => user._id !== id);
                    setProducts(remaining);
                }
            })
        }
    }

    return (
        <div>
            <h1 className='text-center bg-warning p-3 mt-4'>Inventory Items: {products.length}</h1>
            <div className='productsContainer'>
                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    ></ManageProduct>)
                }

            </div>
            
        </div>
    );
};

export default Manage;