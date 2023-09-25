import React from 'react'
import {Link} from 'react-router-dom'
export default function UserHeader() {
  return (
    <>
    {/* ======= Header ======= */}
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link to="/user">House Collab </Link>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <Link to="/" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link> */}

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link className='px-4 mx-2' to="/user">User Home</Link>
            </li>
            <li>
              <Link className='px-4 mx-2' to="/user/services">User Services</Link>
            </li>
            <li>
              <Link className='px-4 mx-2' to="/user/services">My Bookings</Link>
            </li>
            <li>
              <Link className='px-4 mx-2' to="/user/about">User About</Link>
            </li>
            <li>
              <Link className='px-4 mx-2' to="/user/contact">Contact Us</Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>{/* .navbar */}

        <div className="dropdown">
          <button className="get-started-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className='bx bxs-user'></i>
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/user/login" className="dropdown-item">Profile</Link></li>
            <li><a className="dropdown-item" >Logout</a></li>
          </ul>
        </div>

      </div>
    </header>{/* End Header */}
  </>
  )
}