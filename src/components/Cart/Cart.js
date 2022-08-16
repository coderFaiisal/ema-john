import React from "react";
import "./Cart.css";

const Cart = ({children, cart, handleClearCart }) => {
  const quantity = cart.reduce((quantity, pd) => quantity + pd.quantity, 0);
  const total = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);
  const shippingCost = cart.reduce((total, pd) => total + pd.shipping, 0);
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = (total + shippingCost + tax).toFixed(2);
  return (
    <div className="cart">
      <div>
        <h2>Order Summary</h2>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping: ${shippingCost}</p>
        <p>Tax: ${tax} </p>
        <h3>Grand Total: ${grandTotal}</h3>
      </div>
      <div>
        <button onClick={() => handleClearCart()} className="clear-btn">
          Clear Cart
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
