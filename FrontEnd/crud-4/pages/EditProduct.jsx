import React, { useState } from 'react'
import { UpdateProd } from '../Axious/axiousApi'
import { GloablHook } from '../contextStore/store'
import { motion } from 'framer-motion';


export const EditProduct = () => {

  const { user, editUid } = GloablHook()

  console.log('editUid', editUid);


  const [Updated, setUpdated] = useState({
    title: editUid.title,
    description: editUid.description,
    img_url: editUid.img_url,
    price: editUid.price,
    quantity: editUid.quantity
  })

  const handleInputs = (e) => {
    setUpdated({
      ...Updated,

      [e.target.name]: e.target.value
    })
  }

  const dataCaptured = async (e) => {
    e.preventDefault()
    console.log('newdata ', Updated);
    const resp = await UpdateProd(editUid._id, Updated)
    console.log(resp.data);

    setUpdated({
      title: '',
      description: '',
      img_url: '',
      price: '',
      quantity: ''
    })

  }



  return (

    <div className="section bg-theme-color-light overlay-dark overlay-opacity-8 bg-cover p-2 lazy" data-loaded="true"
      style={{
        backgroundImage: 'url(https://wallpapercave.com/wp/wp10074613.jpg)',
        backgroundSize: "contain",
        backgroundPosition: ''
      }}>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="row text-center-md text-center-xs d-middle justify-content-start">
          <motion.div className="col-12 col-lg-6 mb-5 text-white aos-init aos-animate" data-aos="fade-in" data-aos-delay="0" data-aos-offset="0"
            initial={{ opacity: 0, y: 0 }}
            
            animate={{ opacity: 1, y: 0, x: 600 ,backgroundColor: "#3603035a" ,boxShadow: "rgb(205 164 164 / 30%) -2px 5px 0px 3px" }}
            transition={{ duration: 0.6 }}
            // transition={{duration: 0.6 , type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* main title */}
            <h1 className="display-4 fw-bold mb-0">
              <span className="d-inline-block mt-3">
                {/* <span className="h6 fw-normal d-block text-dark text-align-end text-center-xs">
                  Over 28.988 Properties
                </span> */}
                <span className="text-danger">Bootdey</span> Real Estate
              </span>
            </h1>
            {/* slogan */}
            <p className="h3 fw-normal mb-0">
              Your home, one click away
            </p>
          </motion.div>
          <motion.div className="col-12 col-lg-6 text-align-end text-center-md text-center-xs aos-init aos-animate" data-aos="fade-in" data-aos-delay="50" data-aos-offset="0"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0, x: -570 }}
            transition={{ duration: 0.6 }}
          >
            <div className="d-inline-block  shadow-primary-xs rounded-3 p-4 p-md-5 w-100 max-w-450 text-align-start" style={{
              backgroundColor: " #f0f8ff2b",
              backdropFilter: "blur(14px)",
              border: "1px solid #00080f89"
            }}>
              <h2 className="h5 mb-5">
                <i class="bi bi-postcard-fill"></i>
                <span className="d-inline-block px-2">Edit Product</span>
              </h2>
              <form noValidate className="bs-validate" method="get" action="" onSubmit={dataCaptured}>
                <div className="clearfix mb-3">

                  <label className="form-radio form-radio-secondary ml-3">
                    <input type="radio" name="s_type" value="1" />
                    <i></i> Rent
                  </label>
                </div>
                <div className="form-floating mb-3">
                  {/* <select required id="s_location" className="form-control" data-live-search="true" title="No City Selected" defaultValue="">
                    <option value="">No City Selected</option>
                    <option value="1">New York City</option>
                    <option value="2">Washington, DC Area</option>
                    <option value="3">Miami</option>
                    <option value="4">Greater Boston</option>
                    <option value="5">The Hamptons</option>
                    <option value="6">Los Angeles &amp; Orange County</option>
                    <option value="7">Santa Barbara &amp; Montecito</option>
                    <option value="8">Aspen</option>
                    <option value="9">San Francisco Bay Area</option>
                  </select> */}
                  <input
                    placeholder="title of your product"
                    id="s_max_price"
                    type="text"
                    name='title'
                    className="form-control"
                    onChange={handleInputs}
                    value={Updated.title}
                  />
                  <label htmlFor="s_max_price" className='fw-bold'>Title</label>
                </div>
                <div className="form-floating mb-3">
                  {/* <select id="s_rooms" className="form-control" title="No. of Rooms">
                    <option value="1">Studio</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                    <option value="4">4 Rooms</option>
                    <option value="5">5+ Rooms</option>
                  </select> */}
                  <input
                    placeholder="discription of ypur product"
                    id="s_max_price"
                    type="text"
                    name='description'
                    className="form-control"
                    onChange={handleInputs}
                    value={Updated.description}

                  />
                  <label htmlFor="s_max_price">Description</label>
                </div>
                <div className="row gutters-xs">
                  <div className="col-12 col-lg-6">
                    <div className="form-floating mb-3">
                      <select id="s_baths" className="form-control" title="Bathrooms"
                        name='quantity'
                        onChange={handleInputs}
                      >
                        <option value="0">Any</option>
                        <option value="2">2 Quantity</option>
                        <option value="3">3 Quantity</option>
                        <option value="4">4 Quantity</option>
                        <option value="5">5 Quantity</option>
                      </select>
                      <label htmlFor="s_baths">Quantity</label>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-floating mb-3">
                      <input placeholder="Max. Price" id="s_max_price" type="number"
                        className="form-control"
                        name='price'
                        onChange={handleInputs}
                        value={Updated.price} />
                      <label htmlFor="s_max_price">Max. Price</label>
                    </div>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input placeholder="link of product's image" id="s_address" type="text"
                    className="form-control"
                    name='img_url'
                    onChange={handleInputs}
                    value={Updated.img_url} />
                  <label htmlFor="s_address">Image</label>
                </div>
                <button type="submit" className="btn w-100 btn-lg btn-danger bg-gradient-danger">
                  <i className="fi fi-search"></i>
                  Gone to change 
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div >
    </div >
  )
}
