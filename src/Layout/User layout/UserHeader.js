import React from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UserHeader() {
  const nav = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    toast.success("Logout Successfully");
    nav('/userlogin');
  };
  
  let location = useLocation();
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary nav-font">
        <div className="container-fluid">
          {/* Logo on the left side */}
          <h1 className="logo">
            <Link>House Collab</Link>
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
                <NavLink className={`px-4 mx-2 nav-link ${location.pathname === "/user"? 'navstyle':''}`}    exact to='/user'  >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`px-4 mx-2 nav-link ${location.pathname === "/user/about"? 'navstyle':''}`}   to="/user/about" exact>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`px-4 mx-2 nav-link ${location.pathname === "/user/services"? 'navstyle':''}`}   to="/user/services" exact>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`px-4 mx-2 nav-link ${location.pathname === "/user/userbookings"? 'navstyle':''}`}   to="/user/userbookings" exact>My Bookings</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`px-4 mx-2 nav-link ${location.pathname === "/user/contact"? 'navstyle':''}`}   to="/user/contact" exact>Contact Us</NavLink>
              </li>
            </ul>
            <div className="dropdown" style={{ marginTop: "3px", marginRight: "60px" }}>
              <button className="get-started-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className='bx bxs-user'></i>
              </button>
              <ul className="dropdown-menu">
                <li><NavLink  to="/user/profile"  className={`px-2 mx-2 nav-link ${location.pathname === "/user/profile"? 'navstyle':''}`} exact>Profile</NavLink></li>
                <li><a className="dropdown-item" onClick={logout} >Logout</a></li>
              </ul>

            </div>
          </div>
        </div>

      </nav>
    </>
  );
}
