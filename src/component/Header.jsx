import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <img src="logo.jpg" alt="Logo" />
      </div>
      <div className="header-right">
        <a href="#">For Business</a>
        <button className="host-btn">Host</button>
      </div>
    </header>
  );
};

export default Header;