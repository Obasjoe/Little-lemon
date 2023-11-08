import React from 'react'
import logo from '../assets/Logo .svg'

const Nav = () => {
  return (
    <nav>
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

    </nav>
  )
}

export default Nav
