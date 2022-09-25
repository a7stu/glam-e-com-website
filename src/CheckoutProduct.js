import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />

            <div>
                <p className="checkoutProduct__info">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>❤</p>
                    ))}
                </div>

                <button className="checkoutProduct__btn" onClick={removeFromBasket}>Remove from Basket</button>
                
            </div>
        </div>
    )
}

export default CheckoutProduct
