import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Link } from "react-router-dom";
import "./Final.css";

function Final() {
  
  const [{basket}] = useStateValue();
  const [sum, changeSum] = useState(getBasketTotal(basket));

  const func = (sum) => {
    if (sum !== 0) {
        if (document.getElementById("checkout__input").value === "GLAM30")
        {
            sum -= (0.3 * sum)
            changeSum(sum)
        }
    }
  }

  return (

    <div className="Final">
      
      <div className="finalize">

        <h1 className="checkout__heading">Enter a Redeem Code for a discount on your total $ {sum}</h1>

        <input id="checkout__input" className="checkout__input" type="text" />

        <button onClick={() => func(sum)} className="checkout__btn1">Discounted Cost</button>

        <Link to="/finalize" style={{ textDecoration:"none" }} onClick={() => window.location.reload()}>
          <button className="checkout__btn2">Complete</button>
        </Link>

      </div>
      
    </div>
  );
}

export default Final