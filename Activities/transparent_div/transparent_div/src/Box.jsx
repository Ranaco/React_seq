import React from 'react';
import { useState } from 'react';

const Box = (props) => {


  const style = {
    backgroundColor: props.on ? 'black' : 'transparent',
  }

  const handleClick = () => {

  }

  return(
    <div style = {style} id = "box" onClick = {() => props.handleClick(props.id)}>

    </div>
  )
}


export default Box;