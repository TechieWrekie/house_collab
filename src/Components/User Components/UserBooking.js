import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import ApiServices from '../services/ApiServices';
import { toast } from 'react-toastify';

export default function UserBooking() {

  // Use states defined here
  const [load, setload] = useState(true);
  const [bookingData, setbookingData] = useState([]);
  

  // Getting userId and vendor id and subservice id for customer bookings
  const userId = JSON.parse(sessionStorage.getItem('_id'))?? null;
  useEffect(
    ()=>{
      const data = {
        userId
      }
      ApiServices.allbookingshow(data).then(
        (res)=>{
          setbookingData(res.data.data)
          setTimeout(() => {
            console.log(res.data.data)
            setload(false)
          }, 2000);
        }
      )
    },[load]
  )


    const cancelBooking = (id,status)=>{
      setload(true)
      const data = {
        _id:id,
        bookingStatus:status
      }
      ApiServices.bookinstatuschange(data).then(
        (res)=>{

          setTimeout(() => {
            console.log(res.data.data)
            toast.success(res.data.message)
            setload(false)
          }, 2000);
        }
      )
    }

   const obj = {
    position: 'absolute',
    top: '30%',
    left: '50%',
  };
  return (
    <>
    {/* Loader  */}
    {load == true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
    {/* Heading */}
    <div className={load == true ? "disable-screen" : ""}>
      <div className='mt-5 pt-5'>
        <div className='container-fluid' style={{ backgroundColor: "#343B5D", height: "70px" }}>
          <h1 style={{ color: "white", display: "flex", paddingTop: "10px" }}>My Bookings</h1>
        </div>


        {/* Table starts from here */}
        <div className='container mt-5'>
          <div className='table-responsive'>
          <table className="table  table-hover">
            <thead>
              <tr className='table-dark'>
                <th scope="col">S. No.</th>
                <th scope="col">Vendor</th>
                <th scope="col">Date of Booking</th>
                <th scope="col">Cost</th>
                <th scope="col">Sub-Service</th>
                <th scope="col"> User Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Description</th>
                <th scope="col">Booked At</th>
                <th scope="col">Status</th>
                <th scope="col">Feedback</th>
              </tr>
            </thead>
            <tbody>
            {bookingData.length === 0 && (
                    <tr>
                      <td colSpan="12" className="text-center  fs-3">
                        No data to show
                      </td>
                    </tr>
                  )}
              { bookingData?.map((element, index) => {
                const dateString  = new Date(element?.createdAt)
                const formattedDate = dateString.toLocaleDateString('en-US')
                const bookingString  = new Date(element?.dateOfBooking)
                const formattedBookingDate = bookingString.toLocaleDateString('en-US')
                return (<tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">{element?.vendorId?.name}</th>
                  <th scope="row">{formattedBookingDate}</th>
                  <th scope="row">{element?.cost}</th>
                  <th scope="row">{element?.subServiceId?.name}</th>
                  <th scope="row">{element?.name}</th>
                  <th scope="row">{element?.contact}</th>
                  <th scope="row">{element?.address}</th>
                  <th scope="row">{element?.description}</th>
                  <th scope="row">{formattedDate}</th>
                  <th scope="row">
                  {element.bookingStatus === "completed" || element.bookingStatus === "canceled" ? element.bookingStatus :  <button className='btn btn-outline-danger mx-1' onClick={()=>{cancelBooking(element?._id,'canceled')}} >Cancel</button>}
                   

                  </th>
                  <th scope="row">
                    <Link to={"/user/feedback/"+element?._id}>
                      {element.bookingStatus === 'completed'?<button className='btn btn-outline-success mx-1'><i className="bi bi-pencil-square"></i></button> : '' }
                    </Link>
                  </th>

                </tr>)
              })}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
