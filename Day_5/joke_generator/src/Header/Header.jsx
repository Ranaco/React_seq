import React from 'react';
import './Header.css';
import troll from '../Assets/troll_face.png';

const Header = () => {
  return(
    <div id = "header-base">
      <img src = {troll}/>
    <div id="header-title">
      Meme Generator
    </div>
    </div>
  )
}

export default Header;
