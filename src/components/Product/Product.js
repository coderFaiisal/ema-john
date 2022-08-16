import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ handleAddToCart, pd }) => {
  const { name, img, seller, price, ratings } = pd;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4>{name}</h4>
        <p>{seller}</p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(pd)} className="cart-btn">
       <p> Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
