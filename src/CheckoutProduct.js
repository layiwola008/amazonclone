import React from "react";
import "./CheckoutProduct.css";
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({id, image, title, desc, price, rating, hideButton}) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //Remove the item form the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })
    }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star_icon" />
            ))}
        </div>
        <p className="checkoutProduct_desc">{desc}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      
      </div>
        {!hideButton && (
        <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
    </div>
  );
};


export default CheckoutProduct;
