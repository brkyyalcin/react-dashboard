import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <section className="content-page">
        <div className='container-fluid'>
          <h2 className="page_title" id="page-title">
            Başlık
          </h2>
          <div className="home_content_inner">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminLayout