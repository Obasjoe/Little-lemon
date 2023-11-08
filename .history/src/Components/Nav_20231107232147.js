import React, { useState } from 'react';
import logo from '../assets/Logo .svg';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {



  return (
    <nav>
      <Link to="/" className='logo'>
        <img src={logo} alt='logo' />
      </Link>
      

      {/*mobile navbar */}
      <div className='menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>



      {/*nav items */}
      <ul>
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
