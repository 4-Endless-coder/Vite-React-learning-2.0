import React from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="site-header">
        <div className="logo">MyShop</div>

        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <AddToCart />
      </header>
    </div>
  );
};

export default Header;
