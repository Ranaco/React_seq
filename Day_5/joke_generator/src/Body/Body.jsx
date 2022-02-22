import React from 'react';
import { useState } from 'react';
import './Body.css';

const Body = () => {

  const [heading, setHeading] = useState('');
  const [footer, setFooter] = useState('');
  const [imageNumber, setImageNumber] = useState(300);

  const getNewImage = () => {

    var randomNumber = Math.floor(Math.random() * 10 + 400);
    setImageNumber(randomNumber);

  }

  return(
    <div>
    <div id = "body-textfield">
      <input type = "text" placeholder = "Enter the heading" onChange={(e) => setHeading(e.target.value)} value= {heading}/>
      <input type = "text" placeholder = "Enter the footer" onChange={(e) => setFooter(e.target.value)} value={footer}/>
    </div>
    <div id ="get-new-image" onClick={getNewImage}>
      Get new image for meme
    </div>
    <div id= "joke-content">
    <div id = "image-header">
        <b>{heading}</b>
    </div>
      <img src={`https:picsum.photos/${imageNumber}`} alt="Random value"/>
        <b id="footer">{footer}</b>
    </div>
    </div>
  )
}

export default Body;
