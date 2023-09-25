import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to="/">House Collab </Link>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <Link to="/" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link> */}

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className='px-4 mx-2' to="/">Home</Link>
              </li>
              <li>
                <Link className='px-4 mx-2' to="/services">Services</Link>
              </li>
              <li>
                <Link className='px-4 mx-2' to="/about">About</Link>
              </li>
              <li>
                <Link className='px-4 mx-2' to="/contact">Contact Us</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>{/* .navbar */}

          <div className="dropdown">
            <button className="get-started-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/userlogin" className="dropdown-item">User</Link></li>
              <li><Link to="/vendorlogin" className="dropdown-item">Vendor</Link></li>
            </ul>
          </div>

        </div>
      </header>{/* End Header */}
    </>
  );
}
