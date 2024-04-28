import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/ConstantComponent/Header'
import Footer from '../../components/ConstantComponent/Footer'

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