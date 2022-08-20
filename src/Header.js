import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";
import Categories from "./Categories";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  let navigate = useNavigate();
  
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      navigate("/");
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <span className="header_searchIcon">
        <SearchIcon fontSize="large" />
        </span>
      </div>
      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello, {user ? user?.email : 'Guest'}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to={user ? '/orders' : '/login'}>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        </Link>
        <div className="header_option hideOption">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="link">
          <div className="header_optionBasket">
            <ShoppingCartOutlinedIcon className="cartIcon" />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      <Categories />
    </div>
  );
}

export default Header;
