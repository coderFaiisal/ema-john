import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { handleRemoveItem, product } = props;
  const { name, price, shipping, img, quantity } = product;
  return (
    <div className="review-item-container">
      <div>
        <img src={img} alt="" />
      </div>
      <di className="review-item-info-container">
        <div className="review-item-info">
          <p title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Shipping Cost: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveItem(product)}
            className="review-item-delete-btn"
          >
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </di>
    </div>
  );
};

export default ReviewItem;
