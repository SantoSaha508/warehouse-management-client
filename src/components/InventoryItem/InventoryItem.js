import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {
    const [singleProduct, setSingleProduct] = useState({});
    console.log(singleProduct);

    const {id} = useParams();

    useEffect( () => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleProduct(data))

    },[id]);

    return (
        <div>
            <h2>inventory item:{singleProduct.name}</h2>
        </div>
    );
};

export default InventoryItem;