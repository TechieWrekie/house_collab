import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function VendorHeader() {
  const nav = useNavigate()
  const logout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfully")
    nav('/vendorlogin ')

  }
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to="/vendor">House Collab </Link>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <Link to="/" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link> */}

          <nav id="navbar" className="navbar navbar-expand-lg order-last order-lg-0">
            <ul>
              <li>
                <Link className='px-4 mx-2' to="/vendor">Home</Link>
              </li>
              <li>
                <Link className='px-4 mx-2' to="/vendor/about">About</Link>
              </li>
              <li>
                <div className="dropdown">
                  <Link className='px-4 mx-2'>Sub Services <i className="bi bi-caret-down-fill"></i></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/vendor/addsubservice" className="dropdown-item" >Add Sub-Service</Link></li>
                    <li><Link to="/vendor/managesubservice" className="dropdown-item" >Manage Sub-Services</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <Link className='px-4 mx-2' to="/vendor/bookings">Bookings</Link>
              </li>
              <li>
                <Link className='px-4 mx-2' to="/vendor/contact">Contact Us</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>{/* .navbar */}

          <div className="dropdown">
            <button className="get-started-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className='bx bxs-user'></i>
            </button>
            <ul className="dropdown-menu">
              <li><Link to="/vendor/profile" className="dropdown-item">Profile</Link></li>
              <li><a className="dropdown-item" onClick={logout} >Logout</a></li>
            </ul>
          </div>

        </div>
      </header>{/* End Header */}
    </>
  )
}
e