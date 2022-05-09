
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../../../firebase.init';
import './AddItem.css'

const auth = getAuth(app);

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleSubmite = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const supplier_name = event.target.supplier_name.value;

        const product = {name, email, price, quantity, description, img, supplier_name};

        // 
        fetch('https://damp-savannah-41395.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('product added successfully');
            event.target.reset();
        })

    }
    return (
        <div className='text-center mt-3'>
            <form onSubmit={handleSubmite} className="formDesign mx-auto">
                <input className='mb-3'  type="text" name="name" id="" placeholder='Item Name'/> <br />
            <input className='mb-3' value={user.email}  type="text" name="email" id="" placeholder='email'/> <br />
                <input className='mb-3'  type="text" name="supplier_name" id="" placeholder='Supplier'/> <br />
                <input className='mb-3'  type="text" name="description" id="" placeholder='Detail'/> <br />
                <input className='mb-3' type="text" name="price" id="" placeholder='price'/> <br />
                <input className='mb-3' type="text" name="quantity" id="" placeholder='Quantity'/> <br />
                <input className='mb-3' type="text" name="img" id="" placeholder='Img URL'/> <br />
                <input className='mb-3 bg-warning border rounded p-1' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;