import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer'
import UserHeader from './UserHeader'

export default function UserMaster() {
  return (
    <>
    <UserHeader/>
    <Outlet/>
    <Footer/>
    </>
  )
}
