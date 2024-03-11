'use client'
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import * as Yup from 'yup';


const Postupload = () => {


    return (
        <div>

            <section className='Container vh-100 bg-primary-subtle' >
                <div class="card" style="width: 18rem;">
                    <form action="">
                        <input type="file" name="" id="" />
                    </form>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </section>

        </div>
    )
};

export default Postupload