import React from 'react';
import './CartSideBar.css';

function CartSideBar({
  cartItems,
  onClose,
  onRemove,
  onIncrement,
  onDecrement,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-sidebar">
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-image" />
            <div className="cart-details">
              <p className="cart-title">{item.title}</p>
              <p className="cart-price">Rs {item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => onDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrement(item)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => onRemove(item)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Total:</strong> Rs {total}
      </div>
    </div>
  );
}

export default CartSideBar;
