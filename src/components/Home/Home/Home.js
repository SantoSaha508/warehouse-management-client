import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Home.css';
import banner from '../../../Images/banner/banner1.jpg';
import loom1 from '../../../Images/banner/loom1.jpg';
import loom2 from '../../../Images/banner/loom2.jpg';
import service from '../../../Images/banner/service.jpg';

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
                <h3 className='loomsection'>Manufacture section </h3>
                <div className='mt-4'>
                    <img className='w-50' src={loom1} alt="" />
                    <img className='w-50' src={loom2} alt="" />
                </div>
            </div>
            <div className='serviceSection'>
                <h3 className='service'>Our service</h3>
                <img style={{height: '350px'}} className='w-100' src={service} alt="" />
                <p>We have our own service system. We can supply our product to your shop. So you don't neet to warry about it. Just visite our warehouse and make your shop uniqe collection. </p>
            </div>
        </div>
    );
};

export default Home;