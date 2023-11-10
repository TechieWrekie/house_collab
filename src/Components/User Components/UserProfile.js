import React, { useEffect, useState } from 'react'

import { PuffLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import ApiServices from '../services/ApiServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function UserProfile() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [load, setload] = useState(false);
    const [prevdata, setprevdata] = useState([]);


    const nav = useNavigate()
    const _id = JSON.parse(sessionStorage.getItem("_id"))

    const handleForm = (data) => {
        console.log(data)
        data._id = _id
        ApiServices.customerupdate(data).then(
            (res) => {
                toast.success(res.data.message)
                nav("/user")
            }
        ).catch(
            (error) => {
                toast.error(error.data.message)
            }
        )
    }

    useEffect(
        () => {
            const data = {
                _id: _id
            }
            ApiServices.customersingle(data).then(
                (res) => {
                    console.log(res.data.data)
                    setprevdata(res.data.data)
                }
            )
        }, []
    )

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
                        <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Update Profile </h1>
                    </div>
                </div>

                {/* Form starts here */}
                <section className="">
                    <div style={{ marginTop: "-40px", maxWidth: '2800px', margin: '0 auto' }}>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-10">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update User Profile</h3>
                                        <form onSubmit={handleSubmit(handleForm)}>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" defaultValue={prevdata?.firstName} {...register("firstName", { minLength: 4 })} className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="firstName">First Name</label>
                                                    </div>
                                                    {errors.firstname && <span style={{ color: "red" }}>Minimum 4 characters are valid</span>}

                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" defaultValue={prevdata?.lastName} {...register("lastName", { minLength: 4 })} id="lastName" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                                    </div>
                                                    {errors.lastname && <span style={{ color: "red" }}>Minimum 4 characters are valid</span>}

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6 mb-4 d-flex align-items-center">

                                                    <div className="form-outline datepicker w-100">
                                                        <input type="text" disabled defaultValue={prevdata?.email}  {...register("email", {
                                                             pattern: {
                                                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                                                message: "Invalid email address"
                                                            }
                                                        })} className="form-control form-control-lg" id="email" />
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                        <br />
                                                        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
                                                    </div>


                                                </div>
                                                <div className="col-lg-6 mb-4 d-flex align-items-center">

                                                    <div className="form-outline datepicker w-100">
                                                        <input type="password" defaultValue="" {...register("password", {
                                                             pattern: {
                                                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,}$/,
                                                                message: 'Invalid password. Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long.'
                                                            },required:true
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
                                                        <input type="date" defaultValue={
                                                            prevdata?.dob
                                                                ? new Date(prevdata.dob).toLocaleDateString('en-CA')
                                                                : ''
                                                        } {...register("dob")} className="form-control form-control-lg" id="birthdayDate" />
                                                        <label htmlFor="birthdayDate" className="form-label">Date of Birth</label>
                                                    </div>

                                                </div>

                                                <div className="col-md-6 mb-4 d-flex align-items-center">


                                                    <label className="form-label mx-4" htmlFor="firstName">Gender:</label>



                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input"  {...register("gender",{required:true})} type="radio" name='gender' defaultChecked={prevdata?.gender == "male"} value="male" />
                                                        <label className="form-check-label" htmlFor="gender">male</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" {...register("gender",{required:true})} type="radio" name='gender' defaultChecked={prevdata?.gender == "female"} value="female" />
                                                        <label className="form-check-label" htmlFor="gender">female</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" {...register("gender",{required:true})} type="radio" name='gender' defaultChecked={prevdata?.gender == "other"} value="other" />
                                                        <label className="form-check-label" htmlFor="gender">Other</label>
                                                    </div>

                                                </div>




                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type='tel' defaultValue={prevdata?.contact} {...register("contact", { pattern: { value: /^\d{10}$/, message: "Enter valid phone number" } })} className='form-control form-control-lg'></input>
                                                        <label className="form-label" htmlFor="desc">Phone Number</label>
                                                        {errors.contact && <span style={{ color: "red" }}>{errors.contact.message}</span>}

                                                    </div>

                                                </div>



                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <textarea rows="2" cols="50" defaultValue={prevdata?.address} {...register("address")} className='form-control form-control-lg'></textarea>
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
