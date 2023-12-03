import React from 'react'
import VendorHeader from './VendorHeader'
import { Outlet,Navigate } from 'react-router-dom'
import Footer from '../Common/Footer'
import { toast } from 'react-toastify'

export default function VendorMaster() {
  const token = sessionStorage.getItem("token")
  if(!token || token === "null" || token === null || token === undefined || token === "undefined"){
    toast.warn("Please Login first")
    return <Navigate to="/vendorlogin"/>
  }
  return (
    <>
    <VendorHeader/>
    <div style={{minHeight:"70vh"}}>
    <Outlet/>
    </div>
    <div style={{marginTop:"50px"}}>
    <Footer/>
    </div>
    </>
  )
}
