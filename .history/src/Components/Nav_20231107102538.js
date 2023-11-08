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
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/services">Services</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/order">Order</Link>
        </li>
        <li>
            <Link to="reservations">Reservations</Link>
        </li>
      </ul>
       
    </nav>
  )
}

export default Nav
