import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <nav>
      <Link to="hero-section" smooth={true}>Home</Link>
      <Link to="main-content" smooth={true}>About</Link>
      {/* other links */}
    </nav>
  );
}

export default Header;
