import React from 'react'
import Navbar from "../component/navbar/Navbar.jsx"
import Footer from "../component/footer/Footer.jsx"
import { Outlet } from 'react-router-dom'
export default function MainLayout() {
  return (
    <>
 <Navbar/>
 <Outlet/>
<Footer/>
    </>
  )
}