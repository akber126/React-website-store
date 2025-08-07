import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>About Gul Ahmed</h4>
          <p>
            Gul Ahmed is a pioneer name in the textile industry, offering premium quality fabrics,
            pret wear, accessories, and more for men and women.
          </p>
        </div>

        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Return & Exchange</a></li>
            <li><a href="#">Shipping Info</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>Email: support@gulahmed.com</li>
            <li>Phone: +92-300-1234567</li>
            <li>Mon–Fri: 9am – 6pm</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gul Ahmed. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
