import React from 'react'
import {  Link, useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function VendorHeader() {
  const nav = useNavigate()
  const logout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfully")
    nav('/vendorlogin ')

  }
  let location = useLocation();
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary nav-font">
        <div className="container-fluid">
          {/* Logo on the left side */}
          <h1 className="logo">
            <Link exact to="/vendor">House Collab</Link>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`px-4 mx-2 nav-link ${location.pathname === "/vendor"? 'navstyle':''}`}  exact to="/vendor">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`px-4 mx-2 nav-link ${location.pathname === "/vendor/about"? 'navstyle':''}`}  exact to="/vendor/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sub-Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:'#F8F9FA'}} >
                  <li><Link exact to="/vendor/addsubservice"  className={`dropdown-item ${location.pathname === "/vendor/addsubservice"? 'navstyle':''}`} >Add Sub-Services</Link></li>
                  <li><Link exact to="/vendor/managesubservice"  className={`dropdown-item ${location.pathname === "/vendor/managesubservice"? 'navstyle':''}`} >Manage Sub-Services</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={`px-4 mx-2 nav-link ${location.pathname === "/vendor/bookings"? 'navstyle':''}`}  exact to="/vendor/bookings">Bookings</Link>
              </li>
              <li className="nav-item">
                <Link className={`px-4 mx-2 nav-link ${location.pathname === "/vendor/contact"? 'navstyle':''}`}  exact to="/vendor/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="dropdown" style={{ marginTop:"3px", marginRight: "60px"}}>
          <button className="get-started-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='bx bxs-user'></i>
          </button>
          <ul className="dropdown-menu">
            <li><Link exact to="/vendor/profile"  className={`px-2 mx-2 nav-link ${location.pathname === "/vendor/profile"? 'navstyle':''}`}>Profile</Link></li>
            <li><a className=" nav-link px-2 mx-2" onClick={logout} >Logout</a></li>
          </ul>

        </div>
          </div>
        </div>

      </nav>
    </>
  )
}
