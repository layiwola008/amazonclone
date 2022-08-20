import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
//import FlipMove from 'react-flip-move';

const Checkout = () => {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://amaclone.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fikj&w=1080&q=75"
          alt=""
        />
        <div className="checkoutItems">
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Shopping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              key = {item.id}
              id = {item.id}
              title = {item.title}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}
              desc={item.desc}
              />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal className="checkout_subtotal" />
      </div>
    </div>
  );
};

export default Checkout;
