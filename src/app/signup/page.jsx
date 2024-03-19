'use client'
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import * as Yup from 'yup';

const signupvalidationSchema = Yup.object().shape({

  email: Yup.string().email('Email is Invalid').required('Email is required'),
  name: Yup.string().required('Name is required'),
  password: Yup.string().required('Enter the password').min(6, 'Password must be at least 6 characters').max(12 , 'Password has to be bellow longer than 12 characters')
  .matches(/[A-Z]/ , 'Password does not contain Capital letter')
  .matches(/[a-z]/ , 'Password does not contain Lower letter')
  .matches(/[0-9]/ , 'Password does not contain Numeric Number '),
  cpassword: Yup.string().required('Confirm Password is Required')
  .oneOf([Yup.ref('password'), null], 'Passwords must match'),

});


const Signup = () => {

  const signupFrom = useFormik({

    initialValues: {
      email: '',
      name: '',
      password: '',
      cpassword: '',
    },

    onSubmit: (values , {resetForm}) => {
      console.log(values);
      resetForm();
    },
    validationSchema : signupvalidationSchema 

  })

  return (
    <section className="vh-100 bg-primary-subtle">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shadow my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <div style={{
                    backgroundImage: `url('https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg')`,
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}>

                  </div>
                  {/* <img
                    src="https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg"
                    alt="Sample"
                    className="img-fluid"
                  /> */}
                </div>
                <div className="col-xl-6">

                  <div className="card-body p-md-5">
                    <h3 className="mb-5 text-primary fw-bold">
                      Registration Form
                    </h3>
                    <form onSubmit={signupFrom.handleSubmit}>

                      <div class="mb-3">
                        <label for="" class="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={signupFrom.handleChange}
                          value={signupFrom.values.email}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          signupFrom.touched.email &&
                          <small className="text-danger"> {signupFrom.errors.email} </small>
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          onChange={signupFrom.handleChange}
                          value={signupFrom.values.name}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          signupFrom.touched.name &&
                          <small className="text-danger"> {signupFrom.errors.name} </small>
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input
                          type="password"
                          id="password"
                          onChange={signupFrom.handleChange}
                          value={signupFrom.values.password}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          signupFrom.touched.password &&
                          <small className="text-danger"> {signupFrom.errors.password} </small>
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input
                          type="password"
                          id="cpassword"
                          onChange={signupFrom.handleChange}
                          value={signupFrom.values.cpassword}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          signupFrom.touched.cpassword &&
                          <small className="text-danger"> {signupFrom.errors.cpassword} </small>
                        }
                      </div>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          I Agree to Terms & Conditions
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light">
                          Reset all Feilds
                        </button>
                        <button type="submit" className="btn btn-primary ms-2">
                          Submit form
                        </button>
                      </div>
                    </form>

                    <p>Already Registered? <Link href='/login'>Login Here</Link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Signup;