import React from "react";
import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <div>
      <header className="site-header">
        <div className="logo">MyShop</div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>
        <AddToCart />
      </header>
    </div>
  );
};

export default Header;
