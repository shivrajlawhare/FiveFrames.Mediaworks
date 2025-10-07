import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-shape'>
          <div className='navbar-shape-rect1'></div>
          <div className='navbar-shape-circle'></div>
          <div className='navbar-shape-rect2'></div>
        </div>
        <div className='navbar-none'></div>
        <div className='navbar-aboutUs'>About Us</div>
        <div className='navbar-services'>Services</div>
        <img className='navbar-logo' src="Vector.png" alt="" />
        <div className='navbar-portfolio'>Portfolio</div>
        <div className='navbar-contactUs'>Contact Us</div>
        <img className='navbar-menu' src="burger-menu-svgrepo-com.svg" alt="" />
    </div>
  )
}

export default Navbar