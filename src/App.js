import React from "react";
import "./App.css";

const categories = [
  { title: "Unstitched", img: "../images/unstiched clothes.jpeg" },
  { title: "Unstitched-To-Stitched", img: "../images/unstitched to Stitched.jpeg" },
  { title: "Ready To Wear", img: "../images/Ready to Wear.jpeg" },
];

const products = [
  { name: "Khussa 1", img: "../images/khussa 1.jpeg" },
  { name: "Khussa 2", img: "../images/khussa 2.jpeg" },
];

function App() {
  return (
    <div className="app">
      {/* Header */}
      <div className="top-bar">
        <span>PKR</span>
        <span className="logo">🟢 <strong>ideas</strong></span>
        <span>🔍 🛒</span>
      </div>

      {/* Title */}
      <h2 className="section-title">Sale On Fashion Accessories</h2>

      {/* Categories */}
      <div className="category-row">
        {categories.map((cat, i) => (
          <div className="category" key={i}>
            <img src={cat.img} alt={cat.title} />
            <p>{cat.title}</p>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <span>Filters (333 Items)</span>
        <span className="display-icon">▮▮▯</span>
        <span>Sort ⇅</span>
      </div>

      {/* Products */}
      <div className="product-grid">
        {products.map((product, i) => (
          <div className="product-card" key={i}>
            <img src={product.img} alt={product.name} />
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        <div>☰<br />Menu</div>
        <div>🏷️<br />Sale</div>
        <div>👤<br />Account</div>
        <div>🌍<br />Region</div>
      </div>
    </div>
  );
}

export default App;
