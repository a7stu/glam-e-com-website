import React, { useState } from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom";

function Subtotal() {

    const [{basket}] = useStateValue();

    return (
        <div className="subtotal">
            
            <p className="subtotal__title">Total ({basket.length} items): ${getBasketTotal(basket)}</p>

            <Link to="/finalize" style={{ textDecoration:"none" }}>
                <button className="subtotal_btn">Proceed to Checkout</button>
            </Link>

        </div>
    )
}

export default Subtotal
