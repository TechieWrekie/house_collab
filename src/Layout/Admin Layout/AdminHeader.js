import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export default function AdminHeader() {
  const nav = useNavigate()
  const logout = () => {
    sessionStorage.clear();
    nav('/adminlogin')
    toast.success("Logout Successfully")
  }

  const handleNavbarCollapse = () => {
    // Close the navbar collapse when a navigation link is clicked
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  let location = useLocation();
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary nav-font">
        <div className="container-fluid">
          {/* Logo on the left side */}
          <h1 className="logo active">
            <Link exact to="/">House Collab</Link>
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
                <Link onClick={handleNavbarCollapse} className={`px-4 mx-2 nav-link ${location.pathname === "/admin"? 'navstyle':''}`}  exact to="/admin">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleNavbarCollapse} className={`px-4 mx-2 nav-link ${location.pathname === "/admin/customers"? 'navstyle':''}`}  exact to="/admin/customers">Customers</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Manage Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link onClick={handleNavbarCollapse} exact to="/admin/addservice" className={`dropdown-item ${location.pathname === "/admin/addservice"? 'navstyle':''}`} >Add Service</Link></li>
                  <li><Link onClick={handleNavbarCollapse} exact to="/admin/manageservices" className={`dropdown-item ${location.pathname === "/admin/manageservices"? 'navstyle':''}`} >Manage Services</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link onClick={handleNavbarCollapse} className={`px-4 mx-2 nav-link ${location.pathname === "/admin/vendors"? 'navstyle':''}`}  exact to="/admin/vendors">Vendors</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleNavbarCollapse} className={`px-4 mx-2 nav-link ${location.pathname === "/admin/viewbookings"? 'navstyle':''}`}  exact to="/admin/viewbookings">Bookings</Link>
              </li>
              <li className="nav-item">
                <Link onClick={handleNavbarCollapse} className={`px-4 mx-2 nav-link ${location.pathname === "/admin/contact"? 'navstyle':''}`} exact to="/admin/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="dropdown" style={{ marginTop:"3px", marginRight: "60px"}}>
          <button className="get-started-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className='bx bxs-user'></i>
          </button>
          <ul className="dropdown-menu">
            <li><a className=" px-2 mx-2 nav-link" onClick={logout} >Logout</a></li>
          </ul>
        </div>
          </div>
        </div>

      </nav>
    </>
  )
}
