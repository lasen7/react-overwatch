import React from 'react';
import './Header.css';
import logo from 'assets/overwatch_flat.svg';

const Header = () => {
  return (
    <div className="Header">
      <a href="/">
        <img className="Header-img" src={logo} alt="LOGO" />
      </a>
    </div>
  );
};

export default Header;