import React from 'react';
import './NavBar.css';
import logo from '../../images/logo.png';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-content-left'>
        <div className='navbar-logo'>
          <img className='navbar-logo-img' alt='logo' src={logo} />
        </div>
        <div className='navbar-menu'>
          <ul className='navbar-menu-list'>
            <li>Logo</li>
            <li>Főoldal</li>
            <li>Rólunk</li>
            <li>Munkáink</li>
          </ul>
        </div>
      </div>
      <div className='navbar-content-right'>
        <div className='lang-selector'>HUN</div>
        <div className='contact-btn'>Kapcsolat</div>
      </div>
    </div>
  );
};

export default NavBar;
