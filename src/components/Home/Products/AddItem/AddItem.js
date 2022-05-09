
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../../../firebase.init';

const auth = getAuth(app);

const AddItem = () => {
    const [user] = useAuthState(auth);

    const handleSubmite = (event) => {
        event.preventDefault();
        const itemname = event.target.itemname.value;
        const email = event.target.email.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const detail = event.target.detail.value;
        const img = event.target.img.value;
        const supplier = event.target.supplier.value;

        const product = {itemname, email, price, quantity, detail, img, supplier}
    }
    return (
        <div className='text-center mt-3'>
            <form onSubmit={handleSubmite}>
                <input className='mb-3'  type="text" name="itemname" id="" placeholder='Item Name'/> <br />
                <input className='mb-3' value={user.email}  type="text" name="email" id="" placeholder='email'/> <br />
                <input className='mb-3'  type="text" name="supplier" id="" placeholder='Supplier'/> <br />
                <input className='mb-3'  type="text" name="detail" id="" placeholder='Detail'/> <br />
                <input className='mb-3' type="text" name="price" id="" placeholder='price'/> <br />
                <input className='mb-3' type="text" name="quantity" id="" placeholder='Quantity'/> <br />
                <input className='mb-3' type="text" name="img" id="" placeholder='Img URL'/> <br />
                <input className='mb-3' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;