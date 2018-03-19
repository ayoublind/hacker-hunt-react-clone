import React from 'react';
import '../styles/Header.css';
import logo from '../assets/hh-logo.svg';

const Header = () => (
  <div className="header">
    <img src={logo} alt="Hacker Hunt" className="header__logo" />
    <input 
      type="text" 
      name="search" 
      className="header__search" 
      placeholder="🔍"  
    />
  </div>
);

export default Header;
