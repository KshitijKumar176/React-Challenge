import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, price, image, rating }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__image">
        <img src={image} alt="" />
      </div>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <strong>₹ {price}</strong>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>🌟</p>;
            })}
        </div>
        <button
          className="checkoutProduct__removeButton"
          onClick={removeFromBasket}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
