import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if(user) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [user])

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")} disabled={disabled} style={{backgroundColor: disabled && 'gray'}}>{disabled ? 'Sign in to Checkout' : 'Proceed to Checkout'}</button>
    </div>
  );
};

export default Subtotal;
