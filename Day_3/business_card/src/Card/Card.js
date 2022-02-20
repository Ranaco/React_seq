import React from 'react';
import Profile from '../profile.png'
import './Card.css'
const Card = () => {
  return (
    <div id = "base-card">
      Card
      <img id = "image-id" src={Profile}/>
      <div id=  "name">
      Laura Smith
    </div>
    <div id = "post">
      Frontend Developer
    </div>
    <div id = "website">
      laura.com
    </div>
    <div id="button-div">
    <button id ="email-button">
      Email
    </button>
    <button id = "link-button">
    LinkedIn
    </button>
    </div>
    </div>
  )
}

export default Card;
