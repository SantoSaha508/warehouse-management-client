import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import banner from '../../../Images/banner/banner1.jpg'

const Home = () => {
    

    return (
        <div>
            <div className='mt-3'>
                <img style={{height: '400px'}} className='w-100' src={banner} alt="" />
            </div>
            <Products></Products>
        </div>
    );
};

export default Home;