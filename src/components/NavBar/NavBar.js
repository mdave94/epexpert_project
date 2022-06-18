import React from 'react';
import "./NavBar.css"


const NavBar = () => {
  return(
  <div className='navbar' >
    <div className='navbar-content-left'>
      <div className='navbar-logo'>
        IMG
      </div>
      <div className='navbar-menu'>
          <ul>
              <li>Logo</li>
              <li>Főoldal</li>
              <li>Rólunk</li>
              <li>Munkáink</li>
          </ul>
      </div>
    </div>
    <div className='navbar-content-right'>
      <div className='lang-selector'>
        HUN
      </div>
      <div className='contact'>
        Kapcsolat
      </div>
    </div>
    
  </div>

  )
  


};

export default NavBar;
