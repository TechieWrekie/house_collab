import React from 'react'
import AdminHeader from './AdminHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer'

export default function AdminMaster() {
  return (
    <>
    <AdminHeader/>
    <div className=' outletmargin'>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
