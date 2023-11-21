import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const Navstyle = ({isActive}) =>{
    return {
      color:isActive?'#5FCF80':'',
      fontWeight:isActive?'bold':'',
      cursor:'pointer',
    }
  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary nav-font">
        <div className="container-fluid">
          {/* Logo on the left side */}
          <h1 className="logo">
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
                <NavLink className='px-4 mx-2 nav-link' style={Navstyle} exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='px-4 mx-2 nav-link' style={Navstyle} exact to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='px-4 mx-2 nav-link'style={Navstyle} exact to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='px-4 mx-2 nav-link'style={Navstyle} exact to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <div className="dropdown"  style={{marginLeft:"23px"}}>
            <button className="get-started-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </button>
            <ul className="dropdown-menu">
              <li><Link exact to="/adminlogin" className="dropdown-item">Admin</Link></li>
              <li><Link exact to="/userlogin" className="dropdown-item">User</Link></li>
              <li><Link exact to="/vendorlogin" className="dropdown-item">Vendor</Link></li>
            </ul>
          </div>
          </div>
        </div>

      </nav>
    </>
  );
}
