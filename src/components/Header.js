import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <img src="./assets/logo.png" alt="Gul Ahmed Logo" className="logo" />
      <nav className="nav">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Accessories</a>
        <a href="#">Sale</a>
      </nav>
    </header>
  )
}
