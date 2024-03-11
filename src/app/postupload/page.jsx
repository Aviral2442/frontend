'use client'
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import * as Yup from 'yup';


const postimgvalidationSchema = Yup.object().shape({

    // file : Yup.files().required('Choose a file'),
    userName: Yup.string().required('Choose a User Name'),
    date: Yup.date().required('Choose a Date'),
    title: Yup.string().required('Choose a Title'),
    description: Yup.string().required('Choose a Description'),
    likes: Yup.number().min(0),
    shares: Yup.number().min(0),

});

const Postupload = () => {

    const uploadFiles = useFormik({

        initialValues: {

            file: '',
            userName: '',
            date: '',
            title: '',
            description: '',
            likes: '',
            shares: '',

        },

        onSubmit: (values, { resetform }) => {

            console.log(values);
            resetForm();
        },
        validationSchema: postimgvalidationSchema

    });


    return (
        <div>

            <section className='Container vh-100 bg-primary-subtle' >
                <div class="card p-5" >
                    <form onSubmit={uploadFiles.handleSubmit}>
                        <input
                            type="file"
                            name=""
                            id="file"
                            placeholder='Upload Image' />
                        {/* {
                          uploadFiles.touched.file &&
                          <small className="text-danger"> {uploadFiles.errors.file} </small>
                        } */}
                        <br />
                        <input

                            type="text"
                            name=""
                            id="userName"
                            onChange={uploadFiles.handleChange}
                            value={uploadFiles.values.userName}
                            placeholder='UserName' />
                        {
                            uploadFiles.touched.userName &&
                            <small className="text-danger"> {uploadFiles.errors.userName} </small>
                        }
                        <br />
                        <input

                            type="date"
                            name=""
                            id="date"
                            onChange={uploadFiles.handleChange}
                            value={uploadFiles.values.date}
                            placeholder='Post Date ' />
                        {
                            uploadFiles.touched.date &&
                            <small className="text-danger"> {uploadFiles.errors.date} </small>
                        }
                        <br />
                        <input

                            type="text"
                            name=""
                            id="title"
                            onChange={uploadFiles.handleChange}
                            value={uploadFiles.values.title}
                            placeholder='Image Title' />
                        {
                            uploadFiles.touched.title &&
                            <small className="text-danger"> {uploadFiles.errors.title} </small>
                        }
                        <br />
                        <input

                            type="text"
                            name=""
                            id="description"
                            onChange={uploadFiles.handleChange}
                            value={uploadFiles.values.description}
                            placeholder='Image Description ' />
                        {
                            uploadFiles.touched.description &&
                            <small className="text-danger"> {uploadFiles.errors.description} </small>
                        }
                        <br />
                        <input
                            type="number"
                            name=""
                            id="likes"
                            placeholder='No of Likes' />

                        <br />
                        <input
                            type="number"
                            name=""
                            id="shares"
                            placeholder='No of Shares' />
                    </form>

                </div>
            </section>

        </div>
    )
};

export default Postupload