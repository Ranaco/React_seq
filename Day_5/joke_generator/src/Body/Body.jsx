import React from 'react';
import { useState } from 'react';
import './Body.css';

const Body = () => {

  const [data, setData] = useState({
    header: "", 
    footer: "",
    imageNumber: 0,
  })
  const getNewImage = () => {

    var randomNumber = Math.floor(Math.random() * 10 + 400);
    setData((prevData) => {
      return {
        ...prevData,
        imageNumber: randomNumber,
      }
    })

  }

  const setHeading = (heading) => {
      setData((prevData) => {
        return {
          ...prevData,
          header: heading,
        }
      })
  }

  const setFooter = (footer) => {
    setData((prevData) => {
      return {
        ...prevData,
        footer: footer,
      }
    })
  }

  return(
    <div>
    <div id = "body-textfield">
      <input type = "text" placeholder = "Enter the heading" onChange={(e) => setHeading(e.target.value)} value= {data.header}/>
      <input type = "text" placeholder = "Enter the footer" onChange={(e) => setFooter(e.target.value)} value={data.footer}/>
    </div>
    <div id ="get-new-image" onClick={getNewImage}>
      Get new image for meme
    </div>
    <div id= "joke-content">
    <div id = "image-header">
        <b>{data.header}</b>
    </div>
      <img src={`https:picsum.photos/${data.imageNumber}`} alt="Random value"/>
        <b id="footer">{data.footer}</b>
    </div>
    </div>
  )
}

export default Body;
