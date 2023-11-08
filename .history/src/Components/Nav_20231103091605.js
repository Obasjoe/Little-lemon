import React, { useState } from 'react';
import logo from '../assets/Logo .svg';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }



  return (
    <nav className={`navbar`}>
      <a href='/'>
        <img src={logo} alt='logo' />
      </a>

      {/*mobile navbar */}
      <div>
        <div className='bar'/>
        <div className='bar'/>
        <div className='bar'/>
      </div>


      {/*nav items */}
      <ul>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
            <a href='/'>About</a>
        </li>
        <li>
            <a href='/'>Services</a>
        </li>
        <li>
            <a href='/'>Menu</a>
        </li>
        <li>
            <a href='/'>Reservations</a>
        </li>
        <li>
            <a href='/'>Order Now</a>
        </li>
      </ul>
       
    </nav>
  )
}

export default Nav
