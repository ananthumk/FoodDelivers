import React, { useState, useContext } from 'react'
import { assets } from '../../assets/assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setLoginPopUp }) => {
  const [menu, setMenu] = useState('home')
  const [showProfile, setShowProfile] = useState(false)

  const { totalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Menu */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu('mobile-app')}
          className={menu === 'mobile-app' ? 'active' : ''}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          Contact Us
        </a>
      </ul>

      {/* Right Side */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />

        {/* Cart */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          {totalCartAmount() > 0 && <div className="dot"></div>}
        </div>

        {/* Login / Profile */}
        {!token ? (
          <button onClick={() => setLoginPopUp(true)}>Sign in</button>
        ) : (
          <div
            className="navbar-profile"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img src={assets.profile_icon} alt="Profile" />
            {showProfile && (
              <div className="profile-sub">
                <ul>
                  <li>
                    <img src={assets.bag_icon} alt="Orders" />
                    Orders
                  </li>
                  <hr />
                  <li onClick={handleLogout}>
                    <img src={assets.logout_icon} alt="Logout" /> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
