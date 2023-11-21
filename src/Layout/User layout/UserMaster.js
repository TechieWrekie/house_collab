import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../Common/Footer'
import UserHeader from './UserHeader'
import { toast } from 'react-toastify'

export default function UserMaster() {
  const token = sessionStorage.getItem("token")
  if(!token || token == "null" || token == null || token == undefined || token == "undefined"){
    toast.error("Unauthorized Access")
    return <Navigate to="/userlogin"/>
  }
  return (
    <>
      <UserHeader />
      <div style={{minHeight:"70vh"}}>
      <Outlet />
      </div>
      <Footer/>
    </>
  )
}
