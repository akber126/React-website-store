 import React from "react";
import "./Header.css";
import logo from "../Images/logo.png";
export default function Header() {
return (
<header className="site-header">
{/* Top row */}
<div className="header-top">
{/* Left icons */}
<div className="header-left">
<a href="/" className="top-icon stacked">
<img src="../assets/gift-box-icon.png" alt="" />
<span>Ideas Reward</span>
</a>
<a href="/" className="top-icon stacked">
<img src="../assets/lookbook-icon.png" alt="" />
<span>Lookbook</span>
</a>
<a href="/" className="top-icon stacked">
<img src="../assets/store-globe-icon.png" alt="" />
<span>Store</span>
</a>
</div>
{/* Logo */}
<div className="header-logo">
<a href="/">
<img src={logo} alt="logo" />
</a>
</div>
{/* Right icons */}
<div className="header-right">
<button className="icon-btn">
<img src="../assets/search.png" alt=""/>
</button>
<button className="icon-btn">
<img src="../assets/truck-icon.png" alt="" />
</button>
<button className="icon-btn">
<img src="../assets/user-icon.png" alt="" />
</button>
<div className="cart-wrapper">
<button className="icon-btn">
<img src="../assets/add-to-cart-icon.png" alt="" />
</button>
<span className="cart-count">0</span>
</div>
{/* Currency dropdown */}
<div className="currency-container">
<img src="../assets/Rs-symbol.jpg" alt="Rs" />
<select className="currency-dropdown" defaultValue="PKR">
<option value="AUD">AUD</option>
<option value="GBP">GBP</option>
<option value="CAD">CAD</option>
<option value="EUR">EUR</option>
<option value="PKR">PKR</option>
<option value="SAR">SAR</option>
<option value="USD">USD</option>
<option value="AED">AED</option>
</select>
</div>
</div>
</div>
{/* Navigation row */}
<nav className="nav-links">
<a href="/">Sale</a>
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
}