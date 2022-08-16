import React from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { Link } from "react-router-dom";
const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemoveItem = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };

  const handleClearCart = (id) => {
    deleteShoppingCart();
    setCart([]);
  };
  return (
    <div>
      <div className="shop">
        <div className="order-item-container">
          {cart.map((product) => (
            <ReviewItem
              product={product}
              handleRemoveItem={handleRemoveItem}
              key={product.id}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link to="/inventory">
              {<button className="proceed-btn">Proceed Checkout</button>}
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
