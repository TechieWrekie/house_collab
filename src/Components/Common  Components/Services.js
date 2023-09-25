import React from 'react'

export default function Services() {
    return (
        <>
            <div className='mt-4 pt-5'>
            {/* ======= Popular Services Section ======= */}
            <section id="popular-courses" className="courses">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Popular Services</p>
                    </div>

                    <div className="row" data-aos="zoom-in" data-aos-delay="100">

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="course-item">
                                <img src="/assets/img/repairing.jpg" className="img-fluid" alt="..." />
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Repairing</h4>
                                    </div>

                                    <h3><a href="/#">Repairing Household</a></h3>
                                    <p>Electronic repairing: Bringing your devices back to life with precision and expertise.</p>

                                </div>
                            </div>
                        </div> {/* End Course Item*/}

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="course-item">
                                <img src="/assets/img/houseclean.jpg" className="img-fluid" alt="..." />
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Cleaning</h4>
                                    </div>

                                    <h3><a href="/#">Housing Chores</a></h3>
                                    <p>ETransforming your space into a spotless sanctuary.</p>

                                </div>
                            </div>
                        </div> {/* End Course Item*/}

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="course-item">
                                <img src="/assets/img/babysitting.jpg" className="img-fluid" alt="..." />
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Baby Sitting</h4>
                                    </div>

                                    <h3><a href="/#">Baby Sitting</a></h3>
                                    <p>Nurturing young minds with care and attention.</p>
                                </div>
                            </div>
                        </div> {/* End Course Item*/}

                    </div>

                </div>
            </section>{/* End Popular Courses Section */}

            {/* ======= Features Section ======= */}
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
            </section>{/* End Features Section */}
            </div>
        </>
    )
}
