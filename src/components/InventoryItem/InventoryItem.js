import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './InventoryItem.css'

const InventoryItem = () => {
    const [singleProduct, setSingleProduct] = useState({});
    console.log(singleProduct);

    const { id } = useParams();

    useEffect(() => {
        const url = `https://damp-savannah-41395.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleProduct(data))

    }, [id]);

    const handleProductQuantity = () => {
        let { quantity, name, price, description, supplier_name, img } = singleProduct;

        if (quantity > 0) {
            quantity = quantity - 1;
            const updateProductinfo = { quantity, name, price, description, supplier_name, img };

            const url = `https://damp-savannah-41395.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateProductinfo)
            })
                .then(res => res.json())
                .then(data => {
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            setSingleProduct(data)
                        })
                })
        }
        else {
            alert('Stock Out')
        }
    }

    const handleAddQuantity = (event) => {
        event.preventDefault()
        let { quantity, name, price, description, supplier_name, img } = singleProduct;

        const newAddedQuantity = event.target.number.value;
        // console.log(newAddedQuantity);
        if (!newAddedQuantity) {
            alert('Please Inter Valid Numebr')
        } else {
            quantity = parseInt(quantity) + parseInt(newAddedQuantity);
            // quantity=parseInt(updatedquantity)
            console.log(quantity);

            const updateProductinfo = { quantity, name, price, description, supplier_name, img };
            const url = `https://damp-savannah-41395.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateProductinfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // alert('Added successfully!!!');
                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            setSingleProduct(data)
                            event.target.reset()
                        })
                    // window.location.reload(false);
                })
        }



    }

    return (
        <div className='m-3 p-3 inventory'>
            <div className='card p-3 w-80 mx-auto'>
                <div className='text-center mx-auto' style={{ "width": "18rem" }}>
                    <img src={singleProduct?.img} style={{ "height": "200px" }} className=" w-100 card-img-top" alt="..." />
                </div>

                <div className="card-body w-25 mx-auto">
                    <h5 className="card-title">{singleProduct?.name}</h5>
                    <p className="m-none">Price : {singleProduct?.price} BDT</p>
                    <p className="m-none">Quantity : {singleProduct?.quantity} </p>
                    <p className="m-none">Supplier : {singleProduct?.supplier_name} </p>
                    <p className="m-none"><small>{singleProduct?.description}</small></p>
                </div>
            </div>

            <div className="card-footer  text-center w-50 mx-auto delevary mt-3">
                <button className='btn btn-info bg-dark text-white' onClick={handleProductQuantity}> Deliver</button>
                <form onSubmit={handleAddQuantity} className='mt-4'>
                    <input className='' style={{ height: "40px" }} type='number' name="number" placeholder='re-stock'></input>
                    <input className='btn btn-success bg-dark mt-2' type="submit" value="Add Quantity"></input>
                </form>
            </div>

            <div className="card-footer d-block text-center">
                <button className='btn btn-info color-light mx-auto'><Link to='/manage' className='text-light text-center d-block text-decoration-none'>Manage Inventories</Link></button>
            </div>


        </div>
    );
};

export default InventoryItem;