import React from 'react'

export default function Footer() {
  return (
    <div >
     {/* ======= Footer ======= */}
     <footer id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>House Collab</h3>
        <p>
          A108 Adam Street <br />
          New York, NY 535022<br />
          United States <br /><br />
          <strong>Phone:</strong> +1 5589 55488 55<br />
          <strong>Email:</strong> info@example.com<br />
        </p>
      </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
          <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Enter you email to Subscribe to our Newsletter</p>
        <form action="" method="post">
          <input type="email" name="email" /><input type="submit" value="Subscribe" />
        </form>
      </div>

    </div>
  </div>
</div>

<div className="container d-md-flex py-4">

  <div className="me-md-auto text-center text-md-start">
    <div className="copyright">
      &copy; Copyright <strong><span>House Collab</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ */}
      Designed by <a>Paras Dhiman</a>
    </div>
  </div>
  <div className="social-links text-center text-md-right pt-3 pt-md-0">
    <a target='_blank' href="https://www.facebook.com/paras.dhiman.777/" className="facebook"><i className="bx bxl-facebook"></i></a>
    <a target='_blank' href="https://www.instagram.com/paras__dhiman/?next=%2F&hl=en" className="instagram"><i className="bx bxl-instagram"></i></a>
    <a target='_blank' href="https://www.youtube.com/@TechieWrekie" className="google-plus"><i className="bx bxl-youtube"></i></a>
    <a target='_blank' href="https://www.linkedin.com/in/paras-dhiman/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
  </div>
</div>
</footer>{/* End Footer */}
    </div>
  )
}
