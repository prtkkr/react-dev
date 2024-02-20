import { useState } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  console.log(useState());

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="company_logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <img className="cart-logo" src={CART_URL}></img>
          </li>
          <li>
            <button
              className="btn-login"
              onClick={() => {
                loginBtn === "Logout"
                  ? setLoginBtn("Login")
                  : setLoginBtn("Logout");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
