import React from 'react';
import './NavBar.css';

const NavBar = ({address}) => {
  return(
    <div id = "base">
      <div id = "head">
    Color NFT
      </div>
    <div id = "address">
    Address :: {address}
    </div>
    </div>
  )
}

export default NavBar;
