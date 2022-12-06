import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const state = useSelector((state) => state);

  let count = state.basket.length;
  let name = "Guest";

  if (state.user) {
    name = state.user.displayName;
  }

  const handleAuth = () => {
    if (state.user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!state.user && "/login"}>
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionLineOne">Hello {name}</span>
            <span className="header__optionLineTwo">
              {state.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {count}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
