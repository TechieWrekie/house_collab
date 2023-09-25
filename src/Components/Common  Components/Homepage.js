import React, {useEffect} from 'react'

export default function Homepage() {

  return (
    <>
    <div className='container-fluid g-0 '>
    {/* ======= Hero Section ======= */}
    <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="container position-relative " data-aos="zoom-in" data-aos-delay="100">
          <h1>Best House,<br />Staffing Services</h1>
          <h2>Here you will get the professional and appropriate person according to the work you want to be done.</h2>
          <a href="/#" className="btn-get-started">Get Started</a>
        </div>
      </section>{/* End Hero */}
      </div>

      <main id="main">

        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src="assets/img/carousel-1.jpg" style={{borderRadius:"10px"}} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>About Our House Staffing Service</h3>
                <p className="fst-italic">
                At House Collab, we take pride in offering premier house staffing solutions designed to enhance the quality of your home life. Our commitment to excellence, professionalism, and personalized service sets us apart in the industry. Here's what defines us:
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i>We handpick and rigorously vet our house staff to ensure they possess the skills, experience, and dedication needed to meet your household needs.</li>
                  <li><i className="bi bi-check-circle"></i>With years of experience in the industry, we've honed our expertise to provide you with the highest standard of service.</li>
                  <li><i className="bi bi-check-circle"></i>We understand that every home is unique. That's why we offer customizable staffing solutions that align with your lifestyle.</li>
                </ul>
                <p>
                Discover the difference House Collab can make in your home life. Experience the luxury of a well-staffed and harmonious household. Contact us today to discuss your unique requirements and explore how we can enhance your lifestyle.
                </p>
              </div>
            </div>

          </div>
        </section>{/* End About Section */}

  

        {/* ======= Why Us Section ======= */}
        <section id="why-us" className="why-us">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Choose House Collab?</h3>
                  <p>
                  In the hustle and bustle of today's world, managing a household can be a daunting task. The demands of work, family, and personal life often leave little time for maintaining a well-organized and comfortable home environment. This is where house staffing services come into play, offering a range of benefits that can significantly enhance your home experience.
                  </p>
                  <div className="text-center">
                    <a href="/#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Expertise</h4>
                        <p>House staffing agencies carefully select professionals with the expertise and skills needed to excel in their roles.</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Time-Saving</h4>
                        <p> House staffing services free up your time, allowing you to focus on what truly matters.</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-images"></i>
                        <h4>Efficiency</h4>
                        <p> From meal planning to childcare and home maintenance, everything runs smoothly.</p>
                      </div>
                    </div>
                  </div>
                </div>{/* End .content*/}
              </div>
            </div>

          </div>
        </section>{/* End Why Us Section */}

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
                  <img src="assets/img/repairing.jpg" className="img-fluid" alt="..." />
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
                  <img src="assets/img/houseclean.jpg" className="img-fluid" alt="..." />
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
                  <img src="assets/img/babysitting.jpg" className="img-fluid" alt="..." />
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

      </main>
      {/* End #main */}

      {/* <div id="preloader"></div> */}
      <a href="/#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  )
}
