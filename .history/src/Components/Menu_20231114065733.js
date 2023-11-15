import React from 'react'
import recipies from '../recipies'

const Menu = () => {

  return (
    <div className='menu-container'>
      <div>
        <h2>This Week's Specials!</h2>
        <button>Menu</button>
      </div>

      <div>
        {
            recipies.map(recipie => <div key={recipie.id}>
                <img src={recipie.image} alt=''/>

            </div>)
        }

      </div>
    </div>
  )
}

export default Menu
