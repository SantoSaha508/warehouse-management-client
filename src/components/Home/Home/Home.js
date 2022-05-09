import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css';
import banner from '../../../Images/banner/banner1.jpg';
import loom1 from '../../../Images/banner/loom1.jpg';
import loom2 from '../../../Images/banner/loom2.jpg';

const Home = () => {
    

    return (
        <div>
            <div className='mt-3'>
                <img style={{height: '400px'}} className='w-100' src={banner} alt="" />
            </div>
            <div>
            <Products></Products>
            </div>
            <div>
                <h3 className='loomsection'>Our Loom section</h3>
                <div className='mt-4'>
                    <img className='w-50' src={loom1} alt="" />
                    <img className='w-50' src={loom2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;