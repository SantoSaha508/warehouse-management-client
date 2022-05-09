import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageProduct = ({ product }) => {
    const { name, price, description, img, quantity, supplier_name, } = product;
    const navigate = useNavigate();

    const handleUpdate = () => {
        navigate('/inventoryItem')
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
            <button onClick={handleUpdate} className='btn bg-primary w-100 '>Stock Update</button> <br />
        </div>
    );
};

export default ManageProduct;