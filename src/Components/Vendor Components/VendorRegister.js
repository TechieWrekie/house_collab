import React, { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import ApiServices from '../services/ApiServices';
import { useNavigate } from 'react-router-dom';

export default function VendorRegister() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [load, setload] = useState(false);
    const [image, setimage] = useState('');
    const [servicedata, setservicedata] = useState([]);
    const [serviceId, setserviceId] = useState('');
    


    const nav = useNavigate();

    const handleImage =(e)=>{
        setimage(e.target.files[0])
    }

    const handleForm = (data) => {
        let data1 = new FormData()
        for(let key in data){
            data1.append(key,data[key])
        }
        data1.append('vendor_image',image)
        data1.append('serviceId',serviceId)
        ApiServices.addvendor(data1).then(
            (res) => {
                toast.success(res.data.message)
                nav("/vendorlogin")
            }
        ).catch(
            (error) => {
                toast.error(error.data.message)
            }
        )
    }

    useEffect(
        () => {
            ApiServices.showservice().then(
                (res) => {
                    console.log(res.data.data)
                    setservicedata(res.data.data)
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
                        <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Vendor Registration Form </h1>
                    </div>
                </div>

                {/* Form starts here */}
                <section className="">
                    <div style={{ marginTop: "-40px", maxWidth: '2800px', margin: '0 auto' }}>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-10">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Vendor Registration Form</h3>
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
                                                        <input type="text" defaultValue="" {...register("lastname", { minLength: { value: 4, message: "Minimum 4 characters are valid" }, required: true })} id="lastName" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                                    </div>
                                                    {errors.lastname && <span style={{ color: "red" }}>{errors.lastname.message}</span>}

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

                                                <div className="col-md-6 mb-4 d-flex align-items-center">


                                                    <label className="form-label mx-4" htmlFor="firstName">Gender:</label>



                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input"  {...register("gender")} type="radio" defaultValue="male" />
                                                        <label className="form-check-label" htmlFor="gender">male</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" {...register("gender")} type="radio" defaultValue="female" />
                                                        <label className="form-check-label" htmlFor="gender">female</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" {...register("gender")} type="radio" defaultValue="other" />
                                                        <label className="form-check-label" htmlFor="gender">Other</label>
                                                    </div>

                                                </div>




                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type='tel' defaultValue="" {...register("contact", { pattern: { value: /^\d{10}$/, message: "Enter valid phone number" }, required: true })} className='form-control form-control-lg'></input>
                                                        <label className="form-label" htmlFor="desc">Phone Number</label>

                                                    </div>
                                                    {errors.phone && <span style={{ color: "red" }}>{errors.phone.message}</span>}

                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type='number' defaultValue="" {...register("aadharNo", { pattern: { value: /^\d{12}$/, message: "Enter valid Aadhar number" }, required: true })} className='form-control form-control-lg'></input>
                                                        <label className="form-label" >Aadhar Number</label>

                                                    </div>
                                                    {errors.aadharnumber && <span style={{ color: "red" }}>{errors.aadharnumber.message}</span>}

                                                </div>



                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <textarea rows="2" cols="50" defaultValue="" {...register("address", { minLength: { value: 10, message: "Minimum length should be 10" }, required: true })} className='form-control form-control-lg'></textarea>
                                                        <label className="form-label" htmlFor="desc">Address</label>
                                                    </div>
                                                    {errors.address && <span style={{ color: "red" }}>{errors.address.message}</span>}
                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <select className="form-select" aria-label="Default select example" onChange={(e)=>{setserviceId(e.target.value)}}>
                                                            <option selected disabled>Open this select menu</option>
                                                            {servicedata?.map((e,index)=>{
                                                                return <option key={index} value={e?._id}>{e?.name}</option>
                                                            })}
                                                        </select>
                                                            <label htmlFor="formFile" className="form-label my-2">Choose Service</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <div className="mb-3">
                                                            <input className="form-control" type="file" id="formFile" onChange={(e) => handleImage(e)} />
                                                            <label htmlFor="formFile" className="form-label my-2">Upload your picture</label>
                                                        </div>
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
