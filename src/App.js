//React Modules imports
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//All Master Components import
import Master from './Layout/Common/Master'
import UserMaster from './Layout/User layout/UserMaster'
import VendorMaster from './Layout/Vendor Layout/VendorMaster'


//All Common Components import
import Homepage from './Components/Common  Components/Homepage'
import About from './Components/Common  Components/About'
import Services from './Components/Common  Components/Services'
import Contact from './Components/Common  Components/Contact'

//All User Components import
import UserLogin from './Components/User Components/UserLogin'
import UserRegistration from './Components/User Components/UserRegistration'

//All Vendor Components import
import VendorCustomer from './Components/Vendor Components/VendorCustomer'
import VendorSubService from './Components/Vendor Components/VendorSubService'
import VendorBookings from './Components/Vendor Components/VendorBookings'
import VednorLogin from './Components/Vendor Components/VendorLogin'
import AdminMaster from './Layout/Admin Layout/AdminMaster'


export default function App() {
  return (
    <>
      <Router>
        <Routes>

          {/*  Common Page Routes/ Master Routes available for all users */}
          <Route path="/" element={<Master />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/vendorlogin' element={<VednorLogin />} />
          </Route>
          <Route path='/userlogin' element={<UserLogin/>}></Route>


          {/*Admin Page Routes / AdminMaster Routes*/}
          <Route path="/admin" element={<AdminMaster />}>
            <Route path="/admin" element={<Homepage />} />
            <Route path="/admin/services" element={<Services />} />
            <Route path="/admin/contact" element={<Contact />} />
            <Route path="/admin/about" element={<About />} />
          </Route>

          {/*User Page Routes / UserMaster Routes*/}
          <Route path="/user" element={<UserMaster />}>
            <Route path="/user" element={<Homepage />} />
            <Route path="/user/services" element={<Services />} />
            <Route path="/user/contact" element={<Contact />} />
            <Route path="/user/about" element={<About />} />
            <Route path="/user/registration" element={<UserRegistration />} />
          </Route>


          {/*Vendor Page Routes / VendorMaster Routes*/}
          <Route path="/vendor" element={<VendorMaster />}>
            <Route path="/vendor" element={<Homepage />} />
            <Route path="/vendor/customers" element={<VendorCustomer />} />
            <Route path="/vendor/subservices" element={<VendorSubService />} />
            <Route path="/vendor/bookings" element={<VendorBookings />} />
            <Route path="/vendor/contact" element={<Contact />} />
          </Route>




        </Routes>
      </Router>
    </>
  )
}
