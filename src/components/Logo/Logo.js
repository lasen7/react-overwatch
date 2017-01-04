import React from 'react';
import logoFlat from 'assets/overwatch_flat.svg';
import './Logo.css';

const Logo = () => {
  return (
    <div className="Logo">
      <img className="Logo-img-flat" src={logoFlat} alt="LOGO" />
    </div>
  );
};

export default Logo;