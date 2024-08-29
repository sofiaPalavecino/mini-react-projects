import React from 'react';
import './Navbar.scss';

const Navbar = () => (
  <nav className='navbar'>
    <a href='/'>
      <div className='navbar--icon'></div>
    </a>
  </nav>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
