import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, cat, desc, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //Dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        desc: desc,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <span className="product_cat">{cat}</span>
      <img src={image} alt="Product" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star_icon" />
            ))}
        </div>
        <div className="product_description">
        <span>{desc.substring(0, 70) + '...'}</span>
        </div>
        <div className="product_price">
          <small>$</small>        
          <p>{price}</p>
        </div>
      <button onClick={addToBasket}>Add to Basket</button>
      </div>

    </div>
  );
}

export default Product;
