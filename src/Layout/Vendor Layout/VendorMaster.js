import React from 'react'
import VendorHeader from './VendorHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer'

export default function VendorMaster() {
  return (
    <>
    <VendorHeader/>
    <Outlet/>
    <Footer/>
    </>
  )
}
