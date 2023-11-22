import React, { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import ApiServices from '../services/ApiServices';
import { useNavigate } from 'react-router-dom';

export default function VendorProfile() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [load, setload] = useState(true);
    const [image, setimage] = useState('');
    const [servicedata, setservicedata] = useState([]);
    const [serviceId, setserviceId] = useState('');
    const [vendordata, setvendordata] = useState([]);


    const userdata = JSON.parse(sessionStorage.getItem("userData"))
    console.log(userdata._id)


    const filterservicedata = servicedata.filter(element=>element.status !== false)

    const nav = useNavigate();

    const handleImage = (e) => {
        setimage(e.target.files[0])
    }

    useEffect(
        () => {
            const data = {
                _id: userdata._id
            }
            ApiServices.vendorsingle(data).then(
                (res) => {
                    setvendordata(res.data.data)
                    setTimeout(() => {
                        console.log(res.data.data)
                        setload(false)
                    }, 1500);
                }
            )
        }, [load]
    )


    const handleForm = (data) => {
        setload(true)
        console.log(data)
        let data1 = new FormData()
        for (let key in data) {
            data1.append(key, data[key])
        }
        data1.append('_id', userdata._id)
        data1.append('vendor_image', image)
        data1.append('serviceId', serviceId)
        ApiServices.vendorupdate(data1).then(
            (res) => {
                setTimeout(() => {
                    toast.success(res.data.message)
                    nav("/vendor")
                    setload(false)
                }, 1500);
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
                    setservicedata(res.data.data)
                    setTimeout(() => {
                        console.log(res.data.data)
                        setload(false)
                    }, 1500);
                }
            )
        }, [load]
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
                        <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Vendor Profile </h1>
                    </div>
                </div>

                {/* Form starts here */}
                <section className="">
                    <div style={{ marginTop: "-40px", maxWidth: '2800px', margin: '0 auto' }}>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-10">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Vendor Update Form</h3>
                                        <form onSubmit={handleSubmit(handleForm)}>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" defaultValue={vendordata?.firstName} {...register("firstName", { minLength: 4 })} className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="firstName">First Name</label>
                                                    </div>
                                                    {errors.firstName && <span style={{ color: "red" }}>Minimum 4 characters are valid</span>}

                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" defaultValue={vendordata?.lastName} {...register("lastName", { minLength: { value: 4, message: "Minimum 4 characters are valid" } })} id="lastName" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                                    </div>
                                                    {errors.lastName && <span style={{ color: "red" }}>{errors.lastName.message}</span>}

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6 mb-4 d-flex align-items-center">

                                                    <div className="form-outline datepicker w-100">
                                                        <input type="text" disabled defaultValue={vendordata?.email} className="form-control form-control-lg" />
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                        <br />
                                                        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
                                                    </div>


                                                </div>
                                                <div className="col-md-6 mb-4 d-flex align-items-center">

                                                    <div className="form-outline datepicker w-100">
                                                        <input type="password" defaultValue="" {...register("password", {
                                                            pattern: {
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
                                                        <input type="date" defaultValue={vendordata?.dob ? new Date(vendordata?.dob).toLocaleDateString('en-CA') : ''} {...register("dob")} className="form-control form-control-lg" id="birthdayDate" />
                                                        <label htmlFor="birthdayDate" className="form-label">Date of Birth</label>
                                                    </div>

                                                </div>

                                                <div className="col-md-6 mb-4 d-flex align-items-center">


                                                    <label className="form-label mx-4" htmlFor="firstName">Gender:</label>



                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            {...register("gender", { required: true })}
                                                            defaultChecked={vendordata.gender === 'male'}
                                                            type="radio"
                                                            value="male"
                                                        />
                                                        <label className="form-check-label" htmlFor="gender">
                                                            male
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            {...register("gender", { required: true })}
                                                            defaultChecked={vendordata.gender === 'female'}
                                                            type="radio"
                                                            value="female"
                                                        />
                                                        <label className="form-check-label" htmlFor="gender">
                                                            female
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            {...register("gender", { required: true })}
                                                            defaultChecked={vendordata.gender === 'other'}
                                                            type="radio"
                                                            value="other"
                                                        />
                                                        <label className="form-check-label" htmlFor="gender">
                                                            Other
                                                        </label>
                                                    </div>


                                                </div>




                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type='tel' defaultValue={vendordata?.contact} {...register("contact", { pattern: { value: /^\d{10}$/, message: "Enter valid phone number" } })} className='form-control form-control-lg'></input>
                                                        <label className="form-label" htmlFor="desc">Phone Number</label>

                                                    </div>
                                                    {errors.contact && <span style={{ color: "red" }}>{errors.contact.message}</span>}

                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type='number' defaultValue={vendordata?.aadharNo} {...register("aadharNo", { pattern: { value: /^\d{12}$/, message: "Enter valid Aadhar number" } })} className='form-control form-control-lg'></input>
                                                        <label className="form-label" >Aadhar Number</label>

                                                    </div>
                                                    {errors.aadharNo && <span style={{ color: "red" }}>{errors.aadharNo.message}</span>}

                                                </div>



                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <textarea rows="2" cols="50" defaultValue={vendordata?.address} {...register("address", { minLength: { value: 10, message: "Minimum length should be 10" } })} className='form-control form-control-lg'></textarea>
                                                        <label className="form-label" htmlFor="desc">Address</label>
                                                    </div>
                                                    {errors.address && <span style={{ color: "red" }}>{errors.address.message}</span>}
                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <select className="form-select" aria-label="Default select example"  onChange={(e) => { setserviceId(e.target.value) }}>
                                                            <option selected disabled>Choose your service</option>
                                                            {filterservicedata?.map((e, index) => {
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
