import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="about">About</Link>
      <br />
      <Link to="login">Login</Link>
      
      {/* <div>
        <Link>Logo</Link>
      </div>
      <div>

      </div> */}
    </div>
  );
};

export default NavBar;
