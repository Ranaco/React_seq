import React from "react";
import './NavBar.css';
import logo from "../logo.svg";

const NavBar = () => {
    return(
      <div id="header">
          <div id = "head">
             < logo />
              React Js
          </div> 
          <div id = "sub">
            React course for beginners
          </div>
      </div>
    )
  }

    export default NavBar;