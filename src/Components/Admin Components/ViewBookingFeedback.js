import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import ApiServices from '../services/ApiServices';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarRating from './StarRating';

export default function ViewBookingFeedback() {
    const [load, setload] = useState(true);
    const [data, setdata] = useState([]);
    
    const {bookingId,userId} = useParams();
    console.log(bookingId,userId)

    useEffect(
        ()=>{
          const data ={
            bookingId:bookingId
          }
            ApiServices.feedbackall(data).then(
                
                (res)=>{
                    setdata(res.data.data)
                    setTimeout(() => {
                        setload(false)
                    }, 1500);
                }
            )
        },[load]
    )

    const obj = {
        position: 'absolute',
        left: '50%',
        top:'50%'
      };
    
  return (
    <>
    {/* loader */}
    {load == true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
    <div className={load == true ? 'disable-screen' : ''}>
    {/* Heading */}
        {/* Heading */}
        <div className='mt-5 pt-5'>
        <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
          <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>View Feedback</h1>
        </div>
      </div>

      {/* Table starts from here */}
      <div className='container mt-5'>
        <div className='table-responsive'>
        <table className='table table-hover'>
          <thead>
            <tr className='table-dark'>
              <th scope='col'>S. No.</th>
              <th scope='col'>Rating</th>
              <th scope='col'>Message</th>
              <th scope='col'>Created At</th>
            </tr>
          </thead>
          <tbody>
          {data.length === 0 && (
                    <tr>
                      <td colSpan="12" className="text-center  fs-3">
                        No data to show
                      </td>
                    </tr>
                  )}
            {data?.map((element, index) => {
                const formattedcreatedAt = new Date(element?.createdAt).toLocaleDateString('en-US')
              return (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td><StarRating rating={element?.rating}/></td>
                  <td>{element?.message}</td>
                  <td>{formattedcreatedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </>
  )
}
