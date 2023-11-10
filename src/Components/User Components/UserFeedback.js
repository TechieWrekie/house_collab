import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import ApiServices from '../services/ApiServices';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UserFeedback() {
    const {register,handleSubmit,reset,formState:{errors,isDirty}} = useForm();
    const {id} = useParams()
    const userId  = JSON.parse(sessionStorage.getItem('_id'))
    const nav  = useNavigate()    
    const handleFormsubmit =(data)=>{
        data.bookingId = id
        data.userId = userId
        ApiServices.adddfeedback(data).then(
            (res)=>{
                console.log(res.data)
                toast.success(res.data?.message)
                nav('/user/userbookings')
            }
        )
    }
    
  return (
    <>
      {/* Heading */}
      <div className='mt-5 pt-5'>
        <div className='container-fluid'  style={{ backgroundColor: "#343B5D", height: "70px" }}>
          <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>Feedback Form</h1>
        </div>
      </div>
      {/* Form starts here */}
      <div className='container mt-4'>
      <form onSubmit={handleSubmit(handleFormsubmit)}>
        <div className="mb-3">
          <input type="number" placeholder='Rate out of 5'  min="1" max="5" className="form-control" id="service" {...register('rating',{min:{value:1,message:"Minimum rating is 1"},max:{value:5,message:"Maxium rating is 5"},required:true})} />
        {errors.rating && <span style={{color:"red"}}>{errors.rating.message}</span>}
        </div>
        <div className="mb-3">
            <textarea name="Message" className='form-control' id="" cols="30" rows="5" placeholder='Enter the message here' {...register('message',{minLength:{value:10,message:"Minimum 10 characters"},required:true})}></textarea>
            {errors.message && <span style={{color:"red"}}>{errors.message.message}</span>}
        </div>
        <div>
            <button className='btn btn-lg btn-primary' disabled={!isDirty || Object.keys(errors).length >0}>Submit</button>
        </div>
      </form>
      </div>
    </>
  )
}
