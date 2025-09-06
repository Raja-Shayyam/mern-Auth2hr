import React from 'react'
import { Regiter } from '../components/regiter'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signin_login } from '../pages/Login'
import { Home } from '../pages/Home'
import { GloablHook } from '../contextStore/store'
import { Header } from '../components/Sidebar'
import { UserPersonalProducts } from '../components/userPersonalProducts'
import { Pageuserprofile } from '../pages/Pageuserprofile'
import { PrivateRout } from '../privateRouting/PrivatePages'
import { Addproducts } from '../pages/Addproducts'
import { EditProduct } from '../pages/EditProduct'
import '../src/App.css'

const App = () => {
  const { True } = GloablHook()
  console.log(True);

  return (
    <div className='pt-3 ' style={{
      backgroundImage:'url(https://cdn.pixabay.com/photo/2024/03/21/14/29/chevrolet-8647804_1280.jpg)',
      paddingBottom: "20px"
      }}>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Signin_login />} />
          <Route element={<PrivateRout />}>
            <Route path="/userPersonalProducts" element={<UserPersonalProducts />} />
            <Route path="/Pageuserprofile" element={<Pageuserprofile />} />
            <Route path="/Addproducts" element={<Addproducts />} />
            <Route path="/editProduct" element={<EditProduct />} />
          </Route>
          <Route path="/regiter" element={<Regiter />} />
          {True && 2}
          {/*<Route path="/editProduct" element={<editProduct />} /> */}
        </Routes>

      </BrowserRouter>


    </div>
  )
}

export default App