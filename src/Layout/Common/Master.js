import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'

export default function Master() {
  return (
    <>
    <Header/>
    <div className=' outletmargin' style={{minHeight:"100vh"}}>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
