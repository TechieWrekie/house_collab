import React, { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners'
import './BookService.css'
import { useNavigate, useParams } from 'react-router-dom';
import ApiServices from '../services/ApiServices';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function BookService() {

  const param = useParams();
  const vendorId = param.vendorId;
  const nav = useNavigate();
  // console.log(userId)

  const userId = JSON.parse(sessionStorage.getItem('_id'))?? null;
  // console.log(userId)

  // Use states defined
  const [subservicedata, setsubservicedata] = useState([]);
  const [selectedsubserviceid, setselectedsubserviceid] = useState('');
  const [subserviceprice, setsubserviceprice] = useState('');



  const { register, handleSubmit, reset, formState: { errors } } = useForm()





  const handlesubserviceid = (e) => {
    setselectedsubserviceid(e.target.value)
  }
  console.log(selectedsubserviceid)
  
  const [load, setload] = useState();
  const obj = {
    position: "absolute",
    top: "30%",
    left: "50%"
  }
  useEffect(
    () => {
      const data = {
        vendorId: vendorId
      }
      ApiServices.showsubservice(data).then(
        (res) => {
          // console.log(res.data.data)
          setsubservicedata(res.data?.data)
        }
      )
    }, []
  )
  useEffect(
    () => {
      if(selectedsubserviceid){
        const data = {
          _id: selectedsubserviceid
        
      }
      ApiServices.subservicesingle(data).then(
        (res) => {
          setsubserviceprice(res.data?.data?.price)
        }
      
      )
      }
    }, [selectedsubserviceid]
  )

  const formhandle = (formData) => {
    setload(true)

    formData.userId = userId
    formData.vendorId = vendorId
    formData.subServiceId = selectedsubserviceid
    formData.cost = subserviceprice
    ApiServices.bookingadd(formData).then(

      (res) => {
        setTimeout(() => {
          toast.success(res.data.message)
          nav('/user/userbookings')
          setload(false)
        }, 2000);
      }
    ).catch(
      (err) => {
        toast.error("Something went wrong")
      }
    )
  }


  return (
    <>
      {/* loader */}
      {load === true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
      {/* Heading */}
      <div className={load === true ? 'disable-screen' : ''}>
        <div className='mt-5 pt-5'>
          <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
            <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Book Service </h1>
          </div>
        </div>

        {/* Form starts here */}
        <section className="">
          <div style={{ marginTop: "-40px", maxWidth: '2800px', margin: '0 auto' }} data-aos="zoom-in">
            <div className="row justify-content-center align-items-center">
              <div className="col-10">
                <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Service Booking Form</h3>
                    <form onSubmit={handleSubmit(formhandle)} >

                      <div className="row">
                        <div className="col-md-6 mb-4 ">

                          <select className="form-select" style={{ minHeight: "50px" }} onChange={handlesubserviceid} aria-label="Default select example">
                            <option selected disabled required>Choose Vendor Service</option>
                            {subservicedata?.map((e) => (
                              <option value={e?._id} key={e?._id} >{e?.name}</option >

                            ))}
                          </select>
                          <label className="form-label pt-3" >Vendor Services</label>
                        </div>
                        <div className="col-md-6 mb-4">

                          <div className="form-outline">
                            <input type="text" id="lastName" defaultValue={subserviceprice} disabled className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="lastName">Cost</label>
                          </div>

                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 mb-4 d-flex align-items-center">

                          <div className="form-outline datepicker w-100">
                            <input type="date" className="form-control form-control-lg" {...register("dateOfBooking", { required: { value: true, message: "Required" } })} />
                            <label htmlFor="dateofbooking" className="form-label">Date of Booking</label>
                          </div>
                          {errors.dateOfBooking && <span style={{ color: "red", marginLeft: "15px", marginBottom: "32px" }}>{errors.dateOfBooking.message}</span>}
                        </div>

                        <div className="col-md-4 mb-4 d-flex align-items-center">

                          <div className="form-outline datepicker w-100">
                            <input type="text" className="form-control form-control-lg" {...register("name", { minLength: { value: 4, message: "Enter valid name" }, pattern: { value: /^[A-Z a-z]*$/, message: "Enter valid name" } })} id="birthdayDate" />
                            <label htmlFor="birthdayDate" className="form-label">Username</label>
                          </div>
                          {errors.name && <span style={{ color: "red", marginLeft: "15px", marginBottom: "32px" }}>{errors.name.message}</span>}
                        </div>
                        <div className="col-md-4 mb-4 d-flex align-items-center">

                          <div className="form-outline datepicker w-100">
                            <input type="tel" {...register("contact", { pattern: { value: /^\d{10}$/, message: "Enter valid contact" } })} className="form-control form-control-lg" id="birthdayDate" />
                            <label htmlFor="birthdayDate" className="form-label">Contact Number</label>
                          </div>
                          {errors.contact && <span style={{ color: "red", marginLeft: "15px", marginBottom: "32px" }}>{errors.contact.message}</span>}
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">

                          <div className="form-outline">
                            <textarea rows="2" cols="50" {...register("description", { minLength: { value: 10, message: "Mimimum length should be 10" } })} className='form-control form-control-lg'></textarea>
                            <label className="form-label" htmlFor="desc">Other description</label>
                          </div>
                          {errors.description && <span style={{ color: "red" }}>{errors.description.message}</span>}
                        </div>
                        <div className="col-md-6 mb-4 pb-2">

                          <div className="form-outline">
                            <textarea rows="2" cols="50" className='form-control form-control-lg' {...register("address", { minLength: { value: 10, message: "Minimum length should be 10" } })}></textarea>
                            <label className="form-label" htmlFor="desc">Address</label>
                          </div>
                          {errors.address && <span style={{ color: "red" }}>{errors.address.message}</span>}
                        </div>

                      </div>

                      <div className="mt-2 pt-1">
                        <button className="btn btn-primary btn-lg">Book Now</button>
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
