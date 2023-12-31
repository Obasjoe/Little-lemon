import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/salad-chef.jpg'

const Header = () => {
  return (
    <header className='header'>
      <section>
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h3>Restaurant</h3>
          <p>
          We are a family owned Mediterranean restaurant, focused on 
          traditional recipes served with a modern twist.
          </p>
          <Link to='/booking'>
            <button aria-label='On Click'> Reserve Table</button>
          </Link>
        </div>

      </section>
      
    </header>
  )
}

export default Header
