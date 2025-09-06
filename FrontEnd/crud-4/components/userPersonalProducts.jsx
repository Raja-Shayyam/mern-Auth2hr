import React from 'react';
import { useEffect } from 'react';
import { GloablHook } from '../contextStore/store';
import { userProducts } from '../Axious/axiousApi';
import { useState } from 'react';
import useNav from '../customHooks/navtoHome';
import img from '../src/assets/image.png'


export const UserPersonalProducts = () => {
  const { user, loading, seteditUid } = GloablHook()
  const { navgate } = useNav()
  // seteditUid

  const handleEdit = (product) => {
    seteditUid(product)
  }

  const [userProductData, setuserProductData] = useState([])
  console.log();

  const readUserProd = async () => {
    // const loginUid = await ProtMe()

    console.log('loginUid ', user);

    const userProductData = await userProducts(user.id)
    console.log('userProductData.data ', userProductData.data);
    const data = await userProductData.data.prodts
    console.log('d ', data);

    setuserProductData(data)

  }
  console.log('userProductData ', userProductData, loading);

  useEffect(() => {
    readUserProd()
  }, [user])

  return (
    <>
      <div className="container mt-5 p-3" style={{
        // backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/07/04/10/46/vintage-car-7300881_1280.jpg)',
        backgroundSize: "cover",
        
        // backgroundColor: " #f0f8ff2b",
        backdropFilter: "blur(14px)",
        border: "1px solid #00080f89"
        // backgroundPosition: "center",
      }}>
        <div className="row">
          <div className="col-12 text-center mb-4">
            <p className="h6 text-muted mb-3">NEW ARRIVALS</p>
            <div className="btn-group" role="group" aria-label="Product categories">
              <button type="button" className="btn btn-outline-dark me-2">Home & Decor</button>
              <button type="button" className="btn btn-dark active">Lifestyle & Travel</button>
            </div>
          </div>

          <div className="col-12">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {loading ? 'loading plz wait ' : userProductData.map((product) => (
                <div className="col" key={product._id}>
                  <div className="card product-card h-100 border-2 rounded-top-0 text-center">
                    <span className="text-decoration-none text-dark">
                      <div className="" style={{ height: '130px' }}>
                        <a href={`${product.img_url}`} >
                          <img

                            src={product.img_url}
                            className="object-fit-cover  w-100 h-100 "
                            alt={product.name}
                          />
                          {/* <img
                          src={product.img_url}
                          className="card-img-top img-fluid position-absolute top-0 start-0 hover-img"
                          alt={product.name}
                        /> */}
                        </a>
                      </div>
                      <div className="card-body p-3">
                        <p className="card-text text-muted text-uppercase mb-1" style={{ fontSize: '0.8rem' }}>
                          {product.description}
                        </p>
                        <h6 className="card-title fw-normal">{product.title}</h6>
                        {/* <p className="card-text text-success fw-bold">{product.price}</p> */}
                      </div>
                      <div className='p-2 d-flex justify-content-evenly bg-dark rounded-1'>
                        <button className='btn btn-outline-danger' onClick={() => { console.log('deleting') }} >delete</button>
                        <button className='btn btn-outline-warning'
                          onClick={() => {
                            handleEdit(product)
                            navgate('/editProduct')

                          }}>Edit</button>
                      </div>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


