import React, { useState } from 'react';
import logo from '../assets/Logo .svg';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }



  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <Link to="/" className='logo'>
        <img src={logo} alt='logo' />
      </Link>
      

      {/*mobile navbar */}
      <div className='menu-icon' onClick={toggleMenu}>
        <div className='bar'/>
        <div className='bar'/>
        <div className='bar'/>
      </div>



      {/*nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/services">Services</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
            <NavLink to="/order">Order</NavLink>
        </li>
        <li>
            <NavLink to="reservations">Reservations</NavLink>
        </li>
      </ul>
       
    </nav>
  )
}

export default Nav
