import React from 'react'

export default function About() {
  return (
   
   <>
   <div className='mt-4 pt-5'>
   {/* ======= About Section ======= */}
   <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src="/assets/img/carousel-1.jpg" style={{borderRadius:"10px"}} className="img-fluid" alt="" />
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

        </div>
   </>
  )
}
