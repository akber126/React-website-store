import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Gul Ahmed</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Women</li>
            <li>Men</li>
            <li>Sale</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Summer Collection 2025</h2>
        <p>Unstitched, Pret, Accessories & More</p>
      </section>

      <section className="categories">
        <div className="category">Unstitched</div>
        <div className="category">Pret</div>
        <div className="category">Accessories</div>
        <div className="category">Footwear</div>
      </section>

      <section className="products">
        <div className="product-card">
          <img src="./public/images/men lawn suit" alt="lawn suit" />
          <h3>Printed Lawn Suit</h3>
          <p>PKR 3,950</p>
        </div>
        <div className="product-card">
          <img src="./public/images/men kurta" alt="men kurta" />
          <h3>Embroidered Kurti</h3>
          <p>PKR 2,750</p>
        </div>
        <div className="product-card">
          <img src="./public/images/men embroidered kurti" alt="cotton suit" />
          <h3>2PC Cotton Set</h3>
          <p>PKR 4,500</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Gul Ahmed. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
