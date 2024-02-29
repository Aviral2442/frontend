'use client';
import Navbar from '@/navbar'
import React, { useEffect } from 'react'

const Template = ({ children }) => {

    // useffect
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    

    return (

        <div>
            <Navbar></Navbar>
            {children}
        </div>
    )
}

export default Template