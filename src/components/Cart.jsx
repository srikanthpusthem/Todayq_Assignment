import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useHistory } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, total } = useContext(CartContext);
  const history = useHistory();

  const uploadFile = (item) => {
    // Handle file upload logic
  };

  return (
    <div className="cart-container">
      <button className="back-button" onClick={() => history.push('/')}>
        &larr; Back
      </button>
      <h2>My Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <div className="cart-item-description">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </div>
          <div className="cart-item-buttons">
            <button className="upload" onClick={() => uploadFile(item)}>Upload Doc</button>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-checkout">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button onClick={() => alert('Proceeding to Checkout')}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
