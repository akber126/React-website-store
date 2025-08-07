// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">Rs {product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
