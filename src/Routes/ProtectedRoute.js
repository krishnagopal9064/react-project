import React from 'react'
import {Navigate,Outlet} from 'react-router'

const ProtectedRoute = () =>{
  const isAuth=window.sessionStorage.getItem('TokenValue:')
  console.log("Fetched token: ",isAuth)
  return isAuth ? <Outlet/> : <Navigate to = "/login" />
}

export default ProtectedRoute;