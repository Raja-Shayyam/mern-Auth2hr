// import { NavLink } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom"

function useNav(){
  const  toNav =useNavigate()
  const navgate=(hm)=>{
    toNav(hm)
    // return <NavLink to={hm} />
  }
  return {navgate}
}

export default useNav