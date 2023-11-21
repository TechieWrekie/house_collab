import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function AdminHeader() {
  const nav = useNavigate()
  const logout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfully")
    nav('/userlogin')

  }

  const Navstyle = ({ isActive }) => {
    return {
      color: isActive ? '#5FCF80' : '',
      fontWeight: isActive ? 'bold' : '',
      cursor: 'pointer',
      backgroundColor:'#F8F9FA'
    }
  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary nav-font">
        <div className="container-fluid">
          {/* Logo on the left side */}
          <h1 className="logo active">
            <NavLink exact to="/">House Collab</NavLink>
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
                <NavLink className='px-4 mx-2 nav-link' style={Navstyle} exact to="/admin/home">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='px-4 mx-2 nav-link' style={Navstyle} exact to="/admin/customers">Customers</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Manage Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink exact to="/admin/addservice" style={Navstyle} className="dropdown-item" >Add Service</NavLink></li>
                  <li><NavLink exact to="/admin/manageservices" style={Navstyle} className="dropdown-item" >Manage Services</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className='px-4 mx-2 nav-link' style={Navstyle} exact to="/admin/vendors">Vendors</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='px-4 mx-2 nav-link' style={Navstyle} exact to="/admin/viewbookings">Bookings</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='px-4 mx-2 nav-link' style={Navstyle} exact to="/admin/contact">Contact Us</NavLink>
              </li>
            </ul>
            <div className="dropdown" style={{ marginTop:"3px", marginRight: "60px"}}>
          <button className="get-started-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='bx bxs-user'></i>
          </button>
          <ul className="dropdown-menu">
            <li><NavLink exact to="/user/profile" style={Navstyle} className="dropdown-item">Profile</NavLink></li>
            <li><a className="dropdown-item" onClick={logout} >Logout</a></li>
          </ul>
        </div>
          </div>
        </div>

      </nav>
    </>
  )
}
