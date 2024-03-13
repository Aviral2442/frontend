'use client';
import { useFormik } from 'formik';
import React from 'react'

const UploadPost = () => {

    const postForm = useFormik({
        initialValues: {
            title: '',
            description: '',
            username: '',
            image: '',
            postedAt: new Date()
        },
        onSubmit: (values) => {
            console.log(values);

            // sending request to backend

            fetch('http://localhost:5000/post/add', {
                method : 'POST',
                body : JSON.stringify(values),     // convert js to json language
                headers : {
                    'Content-Type': 'application/json'
                }

            })

            .then((response) => {
                console.log(response.status);
            }).catch((err) => {
                console.log(err);
            });
        }
    })

    return (
        <div>
            <div className="container py-5">
                <div className="card shadow">
                    <div className="card-body">
                        <h1 className="text-center display-5 fw-bold">Upload Your Post</h1>
                        <form onSubmit={postForm.handleSubmit}>

                            <div class="mb-3">
                                <label for="" class="form-label">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    onChange={postForm.handleChange}
                                    value={postForm.values.title}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="" class="form-label">Description</label>
                                <textarea
                                    type="text"
                                    id="description"
                                    onChange={postForm.handleChange}
                                    value={postForm.values.description}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                ></textarea>

                            </div>

                            <div class="mb-3">

                                <label for="" class="form-label">Username</label>

                                <input
                                    type="text"
                                    id="username"
                                    onChange={postForm.handleChange}
                                    value={postForm.values.username}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />

                            </div>

                            <div class="mb-3">

                                <label for="" class="form-label">Image</label>
                                <input
                                    type="text"
                                    id="image"
                                    onChange={postForm.handleChange}
                                    value={postForm.values.image}
                                    class="form-control"
                                    placeholder=""
                                    aria-describedby="helpId"
                                />
                            </div>

                            <div class="mb-3">
                                <button type="submit" class="btn btn-primary">Upload</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPost;