import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/hh-logo.svg';

const Header = props => (
  <div className="header">
    <Link to="/" onClick={props.returnHome}>
      <img src={logo} alt="Hacker Hunt" className="header__logo" />
    </Link>
    <input 
      type="text" 
      name="search" 
      className="header__search" 
      placeholder="🔍"  
    />
  </div>
);

export default Header;
