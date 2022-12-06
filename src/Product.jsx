import React, { useState } from "react";
import "./Product.css";
import { useSelector, useDispatch } from "react-redux";

function Product({ id, title, image, price, rating }) {
  const [state, setState] = useState([]);

  const basket = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToBasket = () => {
    //dispatch item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>🌟</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
