import React from 'react'
import { Link } from 'react-router-dom'

function NavBar  ()  {
  return (
    <nav className="nav">
        NavBar
        <div className='links'>
            <Link to="./home">Home</Link>
            <Link to="./memeLibrary">Library</Link>
            <Link to="./favorites">Favorites</Link>
        </div>
    </nav>
  )
}

export default NavBar;