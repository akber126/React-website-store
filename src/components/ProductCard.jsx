import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, price, oldPrice, fewLeft, onAddToCart }) => {
  // calculate discount automatically if oldPrice exists
  const discount =
    oldPrice && oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : 0;

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      {/* Add to Cart Button */}
      <button className="add-to-cart" onClick={onAddToCart}>
        Add To Cart
      </button>

      {/* Product Title */}
      <h3 className="product-title">{title}</h3>

      {/* Prices + Badges together */}
      <div className="price-and-labels">
        <div className="product-prices">
          <span className="current-price">PKR {Number(price).toLocaleString()}</span>
          {oldPrice && (
            <span className="old-price">PKR {Number(oldPrice).toLocaleString()}</span>
          )}
        </div>

        <div className="labels">
          {discount > 0 && <span className="discount-badge">- {discount}% OFF</span>}
          {fewLeft && <span className="few-left-badge">FEW ITEMS LEFT</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
