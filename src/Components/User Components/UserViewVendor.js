import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ApiServices from '../services/ApiServices'

export default function UserViewVendor() {

    const params = useParams()
    const serviceId = params.id
    console.log(serviceId)

    const [data, setdata] = useState([]);
    

    useEffect(
        ()=>{
        const data ={
            serviceId:serviceId
        }
        ApiServices.vendorall(data).then(
            (res)=>{
                setdata(res.data.data)
                console.log(res.data.data)
            }
        )
        },[]
    )
  return (
    <>
    <div className='mt-4 pt-5'>
        {/* ======= Popular Services Section ======= */}
        <section id="popular-courses" className="courses">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Team Members</h2>
                    <p>Professional Team Members</p>
                </div>

                <div className="row" data-aos="zoom-in" data-aos-delay="100">

                    {data.map((e, index) => {
                        return (<div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch my-3">
                            <div className="course-item">
                                <img src={"http://127.0.0.1:3004/" + e?.image} style={{height:"190px", width:"320px"}} className="img-fluid" alt="..." />
                                <div className="course-content ">
                                        <h2>{e?.firstName+""+e?.lastName}</h2>
                                    <div className="d-flex justify-content-between align-items-center mb-3 ">
                                        <Link to={"/user/bookservice/"+e?.userId._id}>
                                       <button className='btn btn-lg btn-outline-success  mt-3'>Book Now</button>
                                       </Link>
                                    </div>


                                </div>
                            </div>
                        </div>

                        )
                    })

                    }

                </div>
            </div>
        </section>{/* End Popular Courses Section */}
    </div>
</>
  )
}
