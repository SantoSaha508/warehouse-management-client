import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { name, price, description, img } = product;
    return (
        <div className='productContainer'>
            <img className='w-100' src={img} alt="" />
            <div className='productDetails'>
                <h4>Item Name: {name}</h4>
                <p>Details: {description}</p>
                <h4>Price: {price}</h4>
            </div>
        </div>
    );
};

export default Product;