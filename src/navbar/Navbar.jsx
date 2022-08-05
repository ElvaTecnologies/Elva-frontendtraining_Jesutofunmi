import React from 'react'
import {IoBagOutline} from "react-icons/io5"

const Navbar = () => {
  return (
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <p className='logo'>f<span>oo</span>dy</p>
          </div>
          <div className="nav-links">
            <ul className="links">
              <li><a className='home' href="/home">Home</a></li>
              <li> <a href="/menu">Menu</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="nav-right">
            <div className="icon-box">
              <div className="icon-badge"></div>
              <IoBagOutline className="icon"/>
            </div>
            <button className='nav-button'>Sign Up</button>
          </div>
        </div>  
      </nav>

  )
}

export default Navbar