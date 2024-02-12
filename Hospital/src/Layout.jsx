import React from 'react'
import { Outlet } from 'react-router'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
