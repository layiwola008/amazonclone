import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <div className="order_top">
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMM Do Y, h:mma")}</p>
        <p className="order_id">
          <small>{order.id}</small>
        </p>
      </div>
      <div className="order_items">
        <div className="basket">
        {order.data.basket?.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
        </div>

        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order_total">Order Total: {value}</h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeperator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Order;
