import React from 'react'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../../pages/Sidebar'
import Header from '../Admin/Header'

function UserLayout() {
  return (
    <>
    <div>
    </div>
    <div className='flex'>
        <Sidebar/>
    </div>
    {/* <div className='bg-blue-200'>
      <Outlet />
    </div> */}
    </>
  )
}

export default UserLayout