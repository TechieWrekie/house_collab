import React from 'react'
import AdminHeader from './AdminHeader'
import { Outlet,Navigate } from 'react-router-dom'
import Footer from '../Common/Footer'
import { toast } from 'react-toastify'
import '../../App.css'

export default function AdminMaster() {
  const token = sessionStorage.getItem("token")
  if(!token || token == "null" || token == null || token == undefined || token == "undefined"){
    toast.error("Unauthorized Access")
    return <Navigate to="/adminlogin"/>
  }


  return (
    <>
    <AdminHeader/>
    <div>
      <div style={{minHeight:'70vh'}}>
    <Outlet />
    </div>
    </div>
    <div className='my-5 py-5 ' >
    <Footer/>
    </div>
    </>
  )
}
