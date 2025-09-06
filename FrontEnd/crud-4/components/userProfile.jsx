import React from 'react'
import useNav from '../customHooks/navtoHome'
import { GloablHook } from '../contextStore/store'

export const UserProfile = () => {
  const { navgate } = useNav()
  const { user,isAuthenticated } = GloablHook()

  const dynamicNav = (dnav) => {
    // seTrue(true)

    navgate(dnav)
  }

  return (
    <>
      <a onClick={() => dynamicNav(isAuthenticated ? '/Pageuserprofile' : '/regiter')} title="Account" aria-label="Account" className='cursor text-decoration-none d-flex flex-column align-items-center'>
        
          <i className="bi bi-person fs-5"></i>
          <span className='text-center '>{user ? user.username : ''}</span>
        
      </a>
    </>
  )
}
