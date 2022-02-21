import React from 'react';
import './Card.css';
import star from '../assets/star.png';

const Card = ({rating , review, price, country, desc, image}) => {
  return(
    <div id = "card-base">
    <div id = "image-base">
    <div id = "status">
    Sold out
    </div>
    <img src = {image}/>   
    </div>
    <div id="star">
    <img src = {star} alt ="star"/>
    <div id = "star-2">
    <div id="rating">
    {rating}
    </div>
    <div id ="review">
      ({review})
    </div>
     <div id = "country">
      <span>
    </span>
    {country}
    </div>
    </div>
    </div>
    <div id ='remain'>
    <div id ="desc">
    {desc}
    </div>
    <div id ="price">
    <b>{price}</b>
    {'\u00A0'} / person
    </div>
    </div>
    </div>
  )
}

export default Card;
