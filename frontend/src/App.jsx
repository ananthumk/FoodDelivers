import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  const [loginPopup, setLoginPopUp] = useState(false)
  return (
    <>
   {loginPopup && <LoginPopup setLoginPopUp={setLoginPopUp} />}
    <div className='app'>
      <Navbar setLoginPopUp={setLoginPopUp} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    
    <Footer />
    </>
  )
}

export default App

