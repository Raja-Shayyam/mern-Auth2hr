import React from 'react';
import { useEffect } from 'react';
import { GloablHook } from '../contextStore/store';
import { Products } from '../Axious/axiousApi';
import { useState } from 'react';



export const Home = () => {
  const [userProductData, setuserProductData] = useState([])

  const readUserProd = async () => {
    const userProducts = await Products()
    console.log(userProducts.data);
    const data = await userProducts.data.products
    console.log(data);

    setuserProductData(data)

  }
  // console.log(userProductData); ?compress=true&quality=80&w=800&dpr=1.5

  useEffect(() => {
    readUserProd()
  }, [])

  return (
    <>
      <div className="container pb-3">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <p className="h6 text-muted mb-3">ALL PRODUCTS</p>
            <div className="btn-group" role="group" aria-label="Product categories">
              <button type="button" className="btn btn-outline-dark me-2">Home & Decor</button>
              <button type="button" className="btn btn-dark active">Lifestyle & Travel</button>
            </div>
          </div>

          <div className="col-12">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {userProductData.map((product) => (
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






/**
 * 
 * 
      
//       */