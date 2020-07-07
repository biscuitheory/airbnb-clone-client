import React from 'react';

import Nav from './Nav';
import logo from '../assets/images/Airbnb_Logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__container-logo">
        <img className="header__logo" src={logo} alt="" />
      </div>

      <Nav />
    </header>
  );
}

export default Header;
