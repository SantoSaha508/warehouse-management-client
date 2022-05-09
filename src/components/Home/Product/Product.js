import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const {_id, name, price, description, img, quantity, supplier_name, } = product;
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/home/inventoryItem/${id}`);
    }


    return (
        <div className='productContainer'>
            <img className='w-100' src={img} alt="" />
            <div className='productDetails'>
                <h4>Item Name: {name}</h4>
                <h4>Price: {price}</h4>
                <p>Details: {description}</p>
                <h4>Quantity: {quantity}</h4>
                <h5>Supplier: {supplier_name}</h5> 
            </div>
            <button onClick={() => handleUpdate(_id)} className='btn bg-primary w-100 '>
                Update</button>
        </div>
    );
};

export default Product;