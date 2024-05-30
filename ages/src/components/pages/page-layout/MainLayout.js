import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../constant-components/Header'
import Footer from '../../constant-components/Footer'

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