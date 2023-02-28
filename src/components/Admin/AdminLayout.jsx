import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './Header'

const AdminLayout = () => {
  return (
    <>
    <div className=''>
        <Header/>
    </div>
    {/* <div className='container'>
      <Outlet />
    </div> */}
    </>
  )
}

export default AdminLayout