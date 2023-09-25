import React from 'react'

export default function Contact() {
  return (
    <>
    <div >
    {/* ======= Breadcrumbs ======= */}
    <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Your home deserves the best care. Reach out to us for all your house service needs, and let's make your home a better place.</p>
      </div>
    </div>{/* End Breadcrumbs */}

    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div data-aos="fade-up">
        <iframe style={{border:"0", width:" 100%", height: "350px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.637830780306!2d75.58840661129182!3d31.31375365721373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a4c6fae8ba9%3A0xd49b2f292eb27999!2sO7services%20IT%20Training%20in%20Jalandhar!5e0!3m2!1sen!2sin!4v1695470098647!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>

      </div>

      <div className="container" data-aos="fade-up">

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>O7 Services, 2nd floor Badwal Complex</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>{/* End Contact Section */}
    </div>
    
    </>
  )
}
