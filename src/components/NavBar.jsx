import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav">
      NavBar
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/memes">Library</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;