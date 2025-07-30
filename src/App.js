import React, { useState, useEffect } from "react";
import "./App.css";

const carouselImages = [
  "/assets/banner1.jpg",
  "/assets/banner2.jpg",
  "/assets/banner3.jpg"
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/assets/logo.png" alt="Gul Ahmed" />
        </div>
        <nav className="nav">
          <a href="#">Women</a>
          <a href="#">Men</a>
          <a href="#">Accessories</a>
          <a href="#">Sale</a>
        </nav>
      </header>

      {/* Banner Carousel */}
      <section className="carousel">
        <img src={carouselImages[currentIndex]} alt="Banner" />
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="category">
          <img src="/assets/women.jpg" alt="Women" />
          <h3>Women</h3>
        </div>
        <div className="category">
          <img src="/assets/men.jpg" alt="Men" />
          <h3>Men</h3>
        </div>
        <div className="category">
          <img src="/assets/accessories.jpg" alt="Accessories" />
          <h3>Accessories</h3>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Store Locator</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
