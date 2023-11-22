import React, { useState } from 'react'

import { PuffLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import ApiServices from '../services/ApiServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function UserRegistration() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [load, setload] = useState(false);
  const nav = useNavigate()

  const handleForm = (data) => {
    setload(true)
      ApiServices.addcustomer(data).then(
        (res)=>{
          toast.success(res.data.message)
          nav("/userlogin")
          setload(false)
        }
      ).catch(
        (error)=>{
          toast.error(error.data.message)
          setload(false)
        }
      )
  }



  const obj = {
    position: "absolute",
    top: "30%",
    left: "50%"
  }
  return (
    <>
      {/* loader */}
      {load == true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
      {/* Heading */}
      <div className={load == true ? 'disable-screen' : ''}>
        <div className='mt-5 pt-5'>
          <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
            <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>User Registration Form </h1>
          </div>
        </div>

        {/* Form starts here */}
        <section className="">
          <div style={{ marginTop: "-40px", maxWidth: '2800px', margin: '0 auto' }}>
            <div className="row justify-content-center align-items-center">
              <div className="col-10">
                <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">User Registration Form</h3>
                    <form onSubmit={handleSubmit(handleForm)}>

                      <div className="row">
                        <div className="col-md-6 mb-4">

                          <div className="form-outline">
                            <input type="text" defaultValue="" {...register("firstName", { minLength: 4, required: true })} className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="firstName">First Name</label>
                          </div>
                          {errors.firstname && <span style={{ color: "red" }}>Minimum 4 characters are valid</span>}

                        </div>
                        <div className="col-md-6 mb-4">

                          <div className="form-outline">
                            <input type="text" defaultValue="" {...register("lastName", { minLength: 4, required: true })} id="lastName" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="lastName">Last Name</label>
                          </div>
                          {errors.lastname && <span style={{ color: "red" }}>Minimum 4 characters are valid</span>}

                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 mb-4 d-flex align-items-center">

                          <div className="form-outline datepicker w-100">
                            <input type="text" defaultValue="" {...register("email", {
                              required: true, pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                message: "Invalid email address"
                              }
                            })} className="form-control form-control-lg" id="email" />
                            <label htmlFor="email" className="form-label">Email</label>
                            <br />
                            {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
                          </div>


                        </div>
                        <div className="col-md-6 mb-4 d-flex align-items-center">

                          <div className="form-outline datepicker w-100">
                            <input type="password" defaultValue="" {...register("password", {
                              required: true, pattern: {
                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}$/,
                                message: 'Invalid password. Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.'
                              }
                            })} className="form-control form-control-lg" id="password" />
                            <label htmlFor="password" className="form-label">Password</label>
                            <br />
                            {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
                          </div>

                        </div>

                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4 d-flex align-items-center">

                          <div className="form-outline datepicker w-100">
                            <input type="date" defaultValue="" {...register("dob", { required: true })} className="form-control form-control-lg" id="birthdayDate" />
                            <label htmlFor="birthdayDate" className="form-label">Date of Birth</label>
                          </div>

                        </div>

                        <div className="col-md-6 mb-4 d-flex align-items-center g-0">


                          <label className="form-label mx-1 g-0" htmlFor="firstName">Gender:</label>



                          <div className="form-check form-check-inline">
                            <input className="form-check-input"  {...register("gender" )} type="radio"  defaultValue="male"  />
                            <label className="form-check-label" htmlFor="gender">male</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" {...register("gender")} type="radio" defaultValue="female"  />
                            <label className="form-check-label" htmlFor="gender">female</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" {...register("gender")} type="radio"  defaultValue="other"  />
                            <label className="form-check-label" htmlFor="gender">Other</label>
                          </div>

                        </div>




                      </div>
                      <div className="row">
                        <div className="col-md-12 mb-4 pb-2">

                          <div className="form-outline">
                            <input type='tel' defaultValue="" {...register("contact",{pattern:{value: /^\d{10}$/,message:"Enter valid phone number"},required: true })} className='form-control form-control-lg'></input>
                            <label className="form-label" htmlFor="desc">Phone Number</label>

                          </div>
                        {errors.contact && <span style={{ color: "red" }}>{errors.contact.message}</span>}

                        </div>
                            


                      </div>
                      <div className="row">
                        <div className="col-md-12 mb-4 pb-2">

                          <div className="form-outline">
                            <textarea rows="2" cols="50" defaultValue="" {...register("address", { required: true })} className='form-control form-control-lg'></textarea>
                            <label className="form-label" htmlFor="desc">Address</label>
                          </div>

                        </div>


                      </div>

                      <div className="mt-2 pt-1">
                        <button className="btn btn-primary btn-lg">Submit</button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
