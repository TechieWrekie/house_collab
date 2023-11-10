import React, { useEffect, useState } from 'react'
import ApiServices from '../services/ApiServices'
import './VendorDashboard.css'
export default function VendorDashboard() {

  const vendordatastring = sessionStorage.getItem('userData')
  const vendordata = JSON.parse(vendordatastring)
  const vendorId = vendordata?._id
  const [data, setdata] = useState([]);


  useEffect(
    () => {
      const data = {
        _id: vendorId
      }
      ApiServices.vendordashboard(data).then(
        (res) => {
          console.log(res.data)
          setdata(res.data)
        }
      )
    }, []
  )
  return (
    <>
      <div className='container mt-5 pt-5  text-center'>
        <div className='row mt-4'>
          <div className='col-lg-6  maintext' data-aos="zoom-in">
            <div className='counter' >
              <h1 className='px-4' >{data?.totalSubServices}</h1>
            </div>
            <div className='box' style={{ width: "400px" }}>
              <h1 className='px-4 fs-4 fw-bold'>Sub services</h1>
            </div>
          </div>
          <div className='col-lg-6  maintext' data-aos="zoom-in">
            <div className='counter' >
              <h1 className='px-4'>{data?.totalBookings}</h1>
            </div>
            <div className='box' style={{ width: "400px" }}>
              <h1 className='px-4 fs-4 fw-bold'>Bookings</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ======= Features Section ======= */}
      <div style={{marginTop:"70px"}}>
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">

          <div className="row" data-aos="zoom-in" data-aos-delay="100">
            <div className="col-lg-3 col-md-4">
              <div className="icon-box">
                <i className="ri-user-line" style={{ color: "#ffbb2c" }}></i>
                <h3><a href="/#">Professionals</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="ri-brush-4-line" style={{ color: "#5578ff" }}></i>
                <h3><a href="/#">Expertise</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="ri-settings-line" style={{ color: "#e80368" }}></i>
                <h3><a href="/#">Customization</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i className="ri-lock-line" style={{ color: "#e361ff" }}></i>
                <h3><a href="/#">Trust</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-timer-line" style={{ color: "#47aeff" }}></i>
                <h3><a href="/#">Efficiency</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-shield-line" style={{ color: "#ffbb2c" }}></i>
                <h3><a href="/#">Reliability</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-cake-line" style={{ color: "#11dbcf" }}></i>
                <h3><a href="/#">Luxury</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-tools-line" style={{ color: "#4233ff" }}></i>
                <h3><a href="/#">Convenience</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-lightbulb-flash-line" style={{ color: "#b2904f" }}></i>
                <h3><a href="/#">Experience</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-heart-line" style={{ color: "#b20969" }}></i>
                <h3><a href="/#">Care</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-hand-heart-line" style={{ color: "#ff5828" }}></i>
                <h3><a href="/#">Hospitality</a></h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-star-line" style={{ color: "#29cc61" }}></i>
                <h3><a href="/#">Dedication</a></h3>
              </div>
            </div>
          </div>


        </div>

      </section>
      </div>{/* End Features Section */}
 


    </>
  )
}
