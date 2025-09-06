import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import { UserProfile } from './userProfile'
import useNav from '../customHooks/navtoHome';
import { Menu } from './menu';

export const Header = () => {
  const { navgate } = useNav()
  const [show, setShow] = useState(false)

  const handleshow = () => {
    console.log('clicked menu');
    setShow(prev => !prev)
  }

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />

      <header className="p-2" >
        {/* Mobile Header fixed-top*/}
        <div className="d-lg-none bg-white shadow-sm rounded-3 mx-auto mt-3  p-2 ">
          <div className="d-flex justify-content-between align-items-center h-8">
            {/* Mobile Menu Toggle */}

            <div className="d-flex align-items-center w-25">
              <i className="bi bi-list fs-4 me-2" onClick={handleshow} ></i>
              <span className={`${show ? 'd-flex' : 'd-none'}`}>
                <button
                  className="dropdown-item"
                  onClick={() => setSelected("Profile")}
                >
                  <UserProfile />
                </button>

                <button
                  className="dropdown-item"
                  onClick={() => navgate("/userPersonalProducts")}
                >
                  <i className="bi bi-bag me-2"></i>
                </button>
              </span>

            </div>

            {/* Mobile Logo */}
            <a title="Allbirds" className="flex-grow-1 text-center">
              {/* Using a single logo for simplicity */}
              <img src="https://tse1.mm.bing.net/th/id/OIP.6vYGedCsOhG7bZooM4rG5gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Allbirds Logo" className="logo-dark" style={{ height: '30px', width: '60px' }} />
            </a>

            {/* Mobile Right-side Icons */}
            <div className="d-flex align-items-center gap-2">
              <a href="/search" title="Search" aria-label="Search">
                <i className="bi bi-search fs-5"></i>
              </a>
              <div className="position-relative">
                <button title="View Cart" type="button" aria-label="View Cart" className="btn p-0">
                  <i className="bi bi-bag fs-5"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Sub-navigation */}
          <div className="d-flex flex-nowrap overflow-auto py-2">
            {/* You can map over an array of links here */}
            <a href="/collections/mens" className="link-dark text-decoration-none text-uppercase me-3">Men</a>
            <a href="/collections/womens" className="link-dark text-decoration-none text-uppercase me-3">Women</a>
            <a href="/collections/bestsellers" className="link-dark text-decoration-none text-uppercase me-3">Bestsellers</a>
            <a href="/collections/mens-new-arrivals" className="link-dark text-decoration-none text-uppercase me-3">New Arrivals</a>
            <a href="/collections/sale-mens" className="link-dark text-decoration-none text-uppercase me-3">Men's Sale</a>
            <a href="/collections/sale-womens" className="link-dark text-decoration-none text-uppercase me-3">Women's Sale</a>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="d-none d-lg-flex bg-white  rounded-3 mx-auto mt-3 p-3 container"
          style={{
            position: "relative",
            zIndex: 1,
            boxShadow: " -1px 1rem 3rem 7px rgb(9 0 0 / 80%) "
          }}
        >
          <div className="d-flex w-100 justify-content-between align-items-center">
            {/* Desktop Left-side and Nav */}
            <div className="d-flex align-items-center">
              <a href="/" title="Allbirds" className="me-4">
                <img src="https://tse1.mm.bing.net/th/id/OIP.6vYGedCsOhG7bZooM4rG5gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Allbirds Logo" style={{ height: '24px' }} />
              </a>
              <nav className="d-flex gap-3 text-uppercase">
                <a href="/collections/men" className="text-decoration-none link-dark">Men</a>
                <a href="/collections/women" className="text-decoration-none link-dark">Women</a>
                <a href="/collections/shoes" className="text-decoration-none link-dark">Shoes</a>
                <a href="/collections/apparel" className="text-decoration-none link-dark">Apparel</a>
                <a href="/collections/sale" className="text-decoration-none link-dark">Sale</a>
              </nav>
            </div>

            {/* Desktop Right-side Icons */}
            <div className="d-flex align-items-center gap-3" style={{ color: "#0000ffb0" }}>
              <a title="Search" aria-label="Search" className='cursor'>
                <i className="bi bi-search fs-5"></i>
              </a>
              <span>
                <UserProfile />
              </span>
              <a onClick={() => navgate('/userPersonalProducts')} title="View Cart" aria-label="View Cart" className='cursor'>
                <i className="bi bi-bag fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </header></>
  )
}
