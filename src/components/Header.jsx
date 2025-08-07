import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBoxOpen,
  FaChevronDown,
  FaGift,
 FaBook, 
 FaGlobe
} from 'react-icons/fa';
import './Header.css';
import logo from '../Images/logo.png';

const Header = ({ onCartClick, cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-links">
  <a href="#"><FaGift className="top-icon" /> Ideas Rewards</a>
  <a href="#"><FaBook className="top-icon" /> Lookbook</a>
  <a href="#"><FaGlobe className="top-icon" /> Store</a>
</div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <img src={logo} alt="Ideas Logo" className="logo" />

        <div className="header-icons">
          <FaSearch className="icon" title="Search" />
          <FaBoxOpen className="icon" title="Track Order" />
          <div className="currency-selector">
            <span>PKR</span>
            <FaChevronDown className="dropdown-icon" />
          </div>
          <FaUser className="icon" title="Account" />
          <div className="cart-icon-wrapper" onClick={onCartClick}>
            <FaShoppingCart className="icon" title="Cart" />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="/">Azadi Sale</a>
        <a href="/">New Arrivals</a>
        <a href="/">Women</a>
        <a href="/">Men</a>
        <a href="/">Ideas Home</a>
        <a href="/">Salt</a>
        <a href="/">Kids</a>
        <a href="/">Shoes</a>
        <a href="/">Bags</a>
        <a href="/">Fragrances</a>
      </nav>
    </header>
  );
};

export default Header;
