import React from 'react';
import './Header.css';
import logo from 'assets/overwatch_flat.svg';

import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img className="Header-img" src={logo} alt="LOGO" />
      </Link>
    </div>
  );
};

export default Header;