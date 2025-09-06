import { Navigate, Outlet, useLocation } from "react-router-dom"
import { GloablHook } from "../contextStore/store"

export const PrivateRout =()=>{
  const {isAuthenticated,loading}=GloablHook()
  const location =useLocation()

  return (loading? (<div> Loading waite till load data ......</div>)
  :
  isAuthenticated? (<Outlet />): <Navigate to="/login" state={{ from: location }} replace />)
  
  


}