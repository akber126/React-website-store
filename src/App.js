import React from 'react';
import './App.css'; // Importing the CSS file

// --- Main App Component ---
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="page-title">
          <p>SALE</p>
          <h1>Sale On Fashion Accessories</h1>
        </div>
        <CategoryScroller />
        <FilterBar />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

// --- Header Component ---
function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="header-top-left">
          <span><i className="fas fa-gift"></i> IDEAS REWARDS</span>
          <span><i className="fas fa-book-open"></i> LOOKBOOK</span>
          <span><i className="fas fa-store"></i> STORE</span>
        </div>
        <div className="logo-container">
          {/* Using an external image source for the logo */}
          <img src="../assets/logo.png" alt="Ideas Logo" className="logo" />
        </div>
        <div className="header-top-right">
          <i className="fas fa-search"></i>
          <i className="fas fa-truck"></i>
          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-bag"></i>
          <span>PKR</span>
        </div>
      </div>
      <nav className="main-nav">
        {/* The hamburger button is now purely visual without JavaScript */}
        <button className="hamburger" id="hamburger-menu">
          <i className="fas fa-bars"></i>
        </button>
        <ul className="nav-links" id="nav-links">
          <li><a href="#">Azadi Sale</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Ideas Home</a></li>
          <li><a href="#">Salt</a></li>
          <li><a href="#">Kids</a></li>
          <li><a href="#">Shoes</a></li>
          <li><a href="#">Bags</a></li>
          <li><a href="#">Fragrances</a></li>
        </ul>
      </nav>
    </header>
  );
}

// --- Horizontal Category Scroller Component ---
function CategoryScroller() {
  return (
    <section className="category-scroller">
      <div className="category-item">
        <img src="../assets/unstitched.jpg" alt="Unstitched" />
        <p>UNSTITCHED</p>
      </div>
      <div className="category-item">
        <img src="../assets/unstitched to stitched.jpg" alt="Unstitched-to-Stitched" />
        <p>UNSTITCHED-TO-STITCHED</p>
      </div>
      <div className="category-item">
        <img src="../assets/readywear.jpg" alt="Ready to Wear" />
        <p>READY TO WEAR</p>
      </div>
      <div className="category-item">
        <img src="../assets/men.jpg" alt="Man" />
        <p>MAN</p>
      </div>
      <div className="category-item">
        <img src="../assets/men unstitched clothes.jpg" alt="Men's Unstitched" />
        <p>MEN'S UNSTITCHED</p>
      </div>
      <div className="category-item">
        <img src="../assets/Salt.jpg" alt="Salt" />
        <p>SALT</p>
      </div>
      <div className="category-item">
        <img src="../assets/Home'jpg.jpeg" alt="Home" />
        <p>HOME</p>
      </div>
      <div className="category-item">
        <img src="../assets/Fragrances.jpg" alt="Fragrances" />
        <p>FRAGRANCES</p>
      </div>
      <div className="category-item">
        <img src="../assets/shoes and bags.jpg" alt="Shoes & Bags" />
        <p>SHOES & BAGS</p>
      </div>
      <div className="category-item">
        <img src="../assets/kids.jpg" alt="Kids" />
        <p>KIDS</p>
      </div>
    </section>
  );
}

// --- Filter Bar Component ---
function FilterBar() {
  return (
    <div className="filter-bar">
      <div className="filters">
        <i className="fas fa-filter"></i>
        <span>Filters</span>
      </div>
      <div className="display-options">
        <span>Display</span>
        <i className="fas fa-th-large active"></i>
        <i className="fas fa-th"></i>
        <i className="fas fa-square"></i>
        <select>
          <option>Best Selling</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
        </select>
      </div>
    </div>
  );
}

// --- Vertical Product Grid Component ---
function ProductGrid() {
  const products = [
    { img: "../assets/classic leather khussa.jpg", name: "Classic Leather Khussa", price: "PKR 2,499" },
    { img: "../assets/khaddar-embroidered-suit.jpg", name: "Embroidered Flats", price: "PKR 1,999" },
    { img: "../assets/summer sandals.jpg", name: "Summer Sandals", price: "PKR 3,200" },
    { img: "../assets/Formal Heels.jpg", name: "Formal Heels", price: "PKR 4,500" },
    { img: "../assets/Casual Loafers.jpg", name: "Casual Loafers", price: "PKR 2,800" },
    { img: "../assets/woven mules.jpg", name: "Woven Mules", price: "PKR 2,150" },
    { img: "../assets/beaded sandals.jpg", name: "Beaded Sandals", price: "PKR 1,790" },
    { img: "../assets/elegant khussa.jpg", name: "Elegant Khussa", price: "PKR 3,100" },
  ];

  return (
    <section className="product-grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.img} alt={product.name} />
          <p className="product-name">{product.name}</p>
          <p className="product-price">{product.price}</p>
        </div>
      ))}
    </section>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer>
      <p>© 2025 Ideas by Gul Ahmed. All Rights Reserved.</p>
    </footer>
  );
}

// To use these components, you also need to add the Font Awesome CDN link to your `public/index.html` file in the `<head>` section:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

export default App;