import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const state = useSelector((state) => state);

  let val;
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="" alt="" />

        <div className="checkout__title">
          <h2>Hello, {state?.user?.email} Shopping Basket</h2>
          <div className="checkout__items">
            {state.basket.map((item) => {
              console.log(item);
              val += item.price;
              return (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
