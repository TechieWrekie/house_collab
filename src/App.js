//React Modules imports
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

//All Master Components import
import Master from './Layout/Common/Master'
import UserMaster from './Layout/User layout/UserMaster'
import VendorMaster from './Layout/Vendor Layout/VendorMaster'


//All Common Components import
import Homepage from './Components/Common  Components/Homepage'
import About from './Components/Common  Components/About'
import Services from './Components/Common  Components/Services'
import Contact from './Components/Common  Components/Contact'

//All Admin Components import
import AdminLogin from './Components/Admin Components/AdminLogin'
import Vendors from './Components/Admin Components/Vendors'
//All User Components import
import UserLogin from './Components/User Components/UserLogin'
import UserRegistration from './Components/User Components/UserRegistration'

//All Vendor Components import
import VendorBookings from './Components/Vendor Components/VendorBookings'
import AdminMaster from './Layout/Admin Layout/AdminMaster'
import ShowCategory from './Layout/Admin Layout/ShowCategory'
import ShowUser from './Layout/Admin Layout/ShowUser';
import UpdateUser from './Layout/Admin Layout/UpdateUser';
import VendorLogin from './Components/Vendor Components/VendorLogin';
import AdminDashboard from './Components/Admin Components/AdminDashboard';
import Customers from './Components/Admin Components/Customers';
import AddService from './Components/Admin Components/AddService';
import ManageService from './Components/Admin Components/ManageService';
import UpdateService from './Components/Admin Components/UpdateService';
import ViewBookings from './Components/Admin Components/ViewBookings';
import UserViewVendor from './Components/User Components/UserViewVendor';
import BookService from './Components/User Components/BookService';
import VendorContact from './Components/Vendor Components/VendorContact';
import VendorDashboard from './Components/Vendor Components/VendorDashboard';
import VendorAddSubService from './Components/Vendor Components/VendorAddSubService';
import VendorManageSubService from './Components/Vendor Components/VendorManageSubService';
import VendorRegister from './Components/Vendor Components/VendorRegister';
import VendorUpdateSubService from './Components/Vendor Components/VendorUpdateSubService'
import UserBooking from './Components/User Components/UserBooking';
import ViewBookingFeedback from './Components/Admin Components/ViewBookingFeedback';
import UserFeedback from './Components/User Components/UserFeedback';
import UserContact from './Components/User Components/UserContact';
import UserProfile from './Components/User Components/UserProfile';
import VendorProfile from './Components/Vendor Components/VendorProfile';


export default function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <Router>
        <Routes>

          {/*  Common Page Routes/ Master Routes available for all users */}
          <Route path="/" element={<Master />}>
            <Route path="/" element={<Homepage />}/>
            <Route path="/about" element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/vendor/registration" element={<VendorRegister />} />
          <Route path="/user/registration" element={<UserRegistration/>} />

          </Route>


          {/*Admin Page Routes / AdminMaster Routes*/}
          <Route path="/admin" element={<AdminMaster />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/services" element={<Services />} />
            <Route path="/admin/contact" element={<Contact />} />
            <Route path="/admin/about" element={<About />} />
            <Route path='/admin/customers' element={<Customers />} />
            <Route path='/admin/showcategory' element={<ShowCategory/>} />
            <Route path='/admin/showuser' element={<ShowUser/>} />
            <Route path='/admin/addservice' element={<AddService/>} />
            <Route path='/admin/manageservices' element={<ManageService/>} />
            <Route path='/admin/vendors' element={<Vendors/>} />
            <Route path='/admin/updateuser/:id' element={<UpdateUser/>} />
            <Route path='/admin/updateservice/:id' element={<UpdateService/>} />
            <Route path='/admin/viewbookings' element={<ViewBookings/>} />
            <Route path='/admin/viewbookingsfeedback/:bookingId/:userId' element={<ViewBookingFeedback/>} />
          </Route>
          <Route path='/adminlogin' element={<AdminLogin />}></Route>

          {/*User Page Routes / UserMaster Routes*/}
          <Route path="/user" element={<UserMaster />}>
            <Route path="/user" element={<Homepage />} />
            <Route path="/user/services" element={<Services />} />
            <Route path="/user/contact" element={<UserContact />} />

            <Route path="/user/about" element={<About />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/userviewvendor/:id" element={<UserViewVendor />} />
            <Route path="/user/bookservice/:vendorId" element={<BookService />} />
            <Route path="/user/userbookings" element={<UserBooking />} />
            <Route path="/user/feedback/:id" element={<UserFeedback />} />

          </Route>
          <Route path='/userlogin' element={<UserLogin />}></Route>



          {/*Vendor Page Routes / VendorMaster Routes*/}
          <Route path="/vendor" element={<VendorMaster />}>
            <Route path="/vendor" element={<VendorDashboard />} />
            <Route path="/vendor/about" element={<About />} />
            <Route path="/vendor/addsubservice" element={<VendorAddSubService />} />
            <Route path="/vendor/managesubservice" element={<VendorManageSubService />} />
            <Route path="/vendor/bookings" element={<VendorBookings />} />
            <Route path="/vendor/contact" element={<VendorContact />} />
            <Route path="/vendor/profile" element={<VendorProfile />} />
            <Route path="/vendor/updatesubservice/:_id" element={<VendorUpdateSubService />} />
          </Route>
          <Route path='/vendorlogin' element={<VendorLogin />}></Route>



        </Routes>
      </Router>
    </>
  )
}
