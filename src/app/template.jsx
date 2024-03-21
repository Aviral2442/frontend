'use client';
import Navbar from '@/navbar'
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast';

const Template = ({ children }) => {

    // useffect
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    

    return (

        <div >
            <Toaster position="top-center"/>
            <Navbar></Navbar>
            {children}
        </div>
    )
}

export default Template