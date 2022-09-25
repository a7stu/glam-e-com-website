import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}) {

  const [dispatch] = useStateValue();

  const addToBasket = () => {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        },
      });
  };
    
  return (

      <div className="product" id="product">

          <img src={image} />

          <div>
              <p className="product__info">{title}</p>

              <p className="product__price">
                  <small>$ </small>
                  <strong>{price}</strong>
              </p>

              <div className="product__rating">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                      <p>❤</p>
                  ))}
              </div>

              <button className="product__btn" onClick={addToBasket}>Add to Basket</button>
          </div>
      </div>
  )
}

export default Product
