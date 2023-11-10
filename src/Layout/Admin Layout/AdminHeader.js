import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function AdminHeader() {
  const nav = useNavigate()
  const logout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfully")
    nav('/userlogin')

  }
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to="/admin">House Collab </Link>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <Link to="/" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link> */}

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className='px-4 mx-2' to="/admin">Dashboard</Link>
              </li>
              <li>
                <Link className='px-4 mx-2' to="/admin/customers">Customers</Link>
              </li>
              <li>
                <div className="dropdown">
                  <Link className='px-4 mx-2'>Manage Services <i className="bi bi-caret-down-fill"></i></Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/admin/addservice" className="dropdown-item" >Add Service</Link></li>
                    <li><Link to="/admin/manageservices" className="dropdown-item" >Manage Services</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <Link className='px-4 mx-2' to="/admin/vendors">Vendors</Link>
              </li>
              <li>
                <Link className='px-4 mx-2' to="/admin/viewbookings">Bookings</Link>
              </li>
              <li>
                <Link className='px-4 mx-2' to="/admin/contact">Contact Us</Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>{/* .navbar */}

          <div className="dropdown">
            <button className="get-started-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className='bx bxs-user'></i>
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={logout} >Logout</a></li>
            </ul>
          </div>

        </div>
      </header>{/* End Header */}
    </>
  )
}
