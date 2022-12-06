import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import "./Subtotal.css";

function Subtotal({ value }) {
  const state = useSelector((state) => state);

  const getBasketTotal = (arr) => {
    // let val = 0;
    // arr.forEach((e) => {
    //   val += e.price;
    // });
    // return val;
    let amount;
    return arr?.reduce((amount, item) => item.price + amount, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Subtotal (0 items): */}
              Subtotal ({state?.basket?.length} items):
              <strong>{` ${value}`} </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order conatins a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
