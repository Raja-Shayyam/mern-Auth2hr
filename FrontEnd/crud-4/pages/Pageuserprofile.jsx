import React from 'react'
import { GloablHook } from '../contextStore/store'
import useNav from '../customHooks/navtoHome'

export const Pageuserprofile = () => {
  const { logout, user } = GloablHook()
  const { navgate } = useNav()

  const dynamicNav = (dnav) => {
    // seTrue(true)
    navgate(dnav)

  }

  // https://wallpapercave.com/wp/wp3890333.jpg
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
      <div className="section bg-theme-color-light overlay-dark overlay-opacity-8 bg-cover p-2 lazy" data-loaded="true"
        style={{
          backgroundImage: 'url(https://wallpapercave.com/wp/wp3890333.jpg)',
          backgroundRepeat: 'round',       // repeats image to fill container

          border: '5px black',       // proper border

          overflow: 'hidden',
        }}>


        <div className="container d-flex justify-content-center">
          <div className="card p-3 py-4"
            style={{
              backgroundColor: " #f0f8ff2b",
              backdropFilter: "blur(14px)"
            }}>
            <div className="text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" width="100" className="rounded-circle " alt="Profile" />
              <h3 className="mt-2">{user.username}</h3>
              <span className="mt-1 clearfix">Android Developer</span>

              <div className="row mt-3 mb-3">
                <div className="col-md-4">
                  <h5>Projects</h5>
                  <span className="num">10</span>
                </div>
                <div className="col-md-4">
                  <h5>Projects</h5>
                  <span className="num">10</span>
                </div>
                <div className="col-md-4">
                  <h5>Projects</h5>
                  <span className="num">10</span>
                </div>
              </div>

              <hr className="line" />

              <small className="mt-4">I am an android developer working at google Inc at california, USA</small>
              <div className="social-buttons mt-5 d-flex justify-content-evenly">
                <button className="neo-button">
                  <i className="bi bi-facebook"></i>
                </button>
                <button className="neo-button">
                  <i className="bi bi-linkedin"></i>
                </button>
                <button className="neo-button">
                  <i className="bi bi-google"></i>
                </button>
                <button className="neo-button">
                  <i className="bi bi-youtube"></i>
                </button>
                <button className="neo-button">
                  <i className="bi bi-twitter"></i>
                </button>
              </div>

              <div className="profile mt-5 d-flex justify-content-between">
                <button
                  onClick={() => { dynamicNav('/userPersonalProducts') }} className="btn btn-dark px-3"
                >
                  View my Products
                </button>
                <button
                  onClick={() => { dynamicNav('/Addproducts') }} className="btn btn-dark px-3"
                >
                  Add products
                </button>
                <button onClick={() => { logout(user) }} className="btn btn-outline-danger px-3">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

