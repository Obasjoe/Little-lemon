import React from 'react'
import "./Nav.css"
import Hamburger from './Hamburger'

export default function Nav() {
  return (
    <div>
        <div className='navigation'>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>RESERVATIONS</li>
                <li>ORDER</li>
                <li>LOGIN</li>
            </ul>
            <div className='hamburger'>
                <Hamburger/>
            </div>
        </div>
    </div>
  )
}
