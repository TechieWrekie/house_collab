import React, { useEffect, useState } from 'react'
import ApiServices from '../services/ApiServices'
import { Link } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';

export default function Services() {

    const [data, setdata] = useState([]);
    const [load, setload] = useState(true);



    useEffect(
        () => {
            ApiServices.showservice().then(
                (res) => {
                    setTimeout(() => {
                        console.log(res.data.data)
                        setdata(res.data.data)
                        setload(false)
                    }, 1500);
                }
            )
        }, []
    )

    const obj = {
        position: 'absolute',
        left: '50%',
        bottom: '50%'
    };

    const filteredData = data.filter((element) => element.status !== false)
    return (
        <>
            {/* loader */}
            {load == true && <PuffLoader color="#36d7b7" load={load} cssOverride={obj} />}
            {/* Heading */}
            <div className={load == true ? 'disable-screen' : ''}>
                <div className='mt-4 pt-5'>
                    {/* ======= Popular Services Section ======= */}
                    <section id="popular-courses" className="courses">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Services</h2>
                                <p>Popular Services</p>
                            </div>

                            <div className="row" data-aos="zoom-in" data-aos-delay="100">

                                {filteredData.map((e, index) => {
                                    return (<div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch my-3">
                                        <div className="course-item">
                                            <img src={e?.signedurl} className="img-fluid" alt="..." />
                                            <div className="course-content ">
                                                <div className="d-flex justify-content-between align-items-center mb-3 ">
                                                    <Link to={"/user/userviewvendor/" + e?._id}>
                                                        <button className='btn btn-lg btn-outline-success '>{e?.name}</button>
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
            </div>

        </>
    )
}
