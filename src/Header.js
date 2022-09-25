import React from "react";
import "./Header.css";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <>

          <h1 class="redeem__code">
            Use our code GLAM30 at the checkout to get 30% off ALL your items!
          </h1>
        
          <div className="header">
      
            <div className="header__nav">

              <Link to="/" style={{ textDecoration:"none" }}>
                <div className="nav__item">
                    Home
                </div>
              </Link>

              <div className="nav__separate">
                /
              </div>

              <Link to="/products" style={{ textDecoration:"none" }}>
                <div className="nav__item">
                    Products
                </div>
              </Link>

              <div className="header__logo">
                  <img src="logo-removebg-preview.png" className="header__logoImage"/>
                  <h2 className="header__logoTitle">- glam! - </h2>
              </div>

              <Link to="/login" style={{ textDecoration:"none" }}>
                <div className="nav__item">
                    Sign In
                </div>
              </Link>

              <div className="nav__separate">
                /
              </div>

              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <div className="nav__itemBasket">
                  <span style={{ marginRight: "10px" }}>Cart</span>
                  <LocalMallOutlinedIcon fontSize="large"/>
                  <span className="nav__item nav__basketCount">{basket.length}</span>
                </div>
              </Link>

            </div>

          </div>
        
        </>
    )
}

export default Header
