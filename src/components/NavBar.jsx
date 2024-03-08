import React from 'react';
import { NavLink } from "react-router-dom";
// import "./index.css";

function NavBar() {
  return (
    <nav className="navMenu">
      {/* NavBar */}
      <div className='links'>

        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/library" className="nav-link">Library</NavLink>
        <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
        <NavLink to="/upload" className="nav-link">Upload</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;