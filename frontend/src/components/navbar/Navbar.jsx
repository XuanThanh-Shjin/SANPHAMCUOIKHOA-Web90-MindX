import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="NavbarContainer">
            <span className='Navbarlogo'>BookingStaykk</span>
            <div className='NavbarItems'>
                <button className='NavbarBtn'>Đăng ký</button>
                <button className='NavbarBtn'>Đăng nhập</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar