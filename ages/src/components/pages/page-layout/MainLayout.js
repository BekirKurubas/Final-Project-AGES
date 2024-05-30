import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../constant/Header'
import Footer from '../../constant/Footer'

const MainLayout = () => {
  return (
    <div>
        <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
    </div>
  )
}

export default MainLayout