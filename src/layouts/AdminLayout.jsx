import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

const AdminLayout = () => {
  return (
    <div role="navigation" className='wrapper'>
      <BrowserRouter>
        <Sidebar />
        <div className="content-page">
          <h2 className="page_title" id="page-title">
            Başlık
          </h2>
          <div className="home_content_inner">
            <Routes>
              <Route path="/" element={<h1>Anasayfa</h1>}></Route>
              <Route path="/hakkimda" element={<h1>Hakkımda</h1>}></Route>

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default AdminLayout