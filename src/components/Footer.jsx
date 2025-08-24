import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Customer Care */}
        <div className="footer-col">
          <h4>Customer Care</h4>
          <ul>
            <li>Contact us 24/7</li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Return & Exchanges</a></li>
            <li><a href="#">Request a Call Back</a></li>
          </ul>
          <p className="order-phone">
            To place an order:<br />
            0321 2444091, 0321 2444241
          </p>
        </div>

        {/* Company Info */}
        <div className="footer-col">
          <h4>About Gul Ahmed</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Store Locator</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-col">
          <h4>Support & Policies</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Return & Exchange Policy</a></li>
            <li><a href="#">Complaint / Inquiry Form</a></li>
            <li><a href="#">Customer Feedback</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div className="footer-col">
          <h4>Stay Connected</h4>
          <form className="newsletter">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Sign Up</button>
          </form>

          <p className="social-links">
            <a href="#">Facebook</a> | 
            <a href="#"> Instagram</a> | 
            <a href="#"> Twitter</a> | 
            <a href="#"> YouTube</a> | 
            <a href="#"> TikTok</a> | 
            <a href="#"> WhatsApp</a>
          </p>

          <p className="corporate-email">
            For corporate inquiries:{" "}
            <a href="mailto:corporate@ideas.com.pk">corporate@ideas.com.pk</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Gul Ahmed Textile Mills Limited.</p>
      </div>
    </footer>
  );
}
