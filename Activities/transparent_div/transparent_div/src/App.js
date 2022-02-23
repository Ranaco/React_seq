import React from 'react';
import './App.css';
import data from './data';
import { useState } from 'react';
import Box from './Box';

const App = () => {

  const [squares, setSquares] = useState(data);

  const handleClick = (id) => {
    const latestSqaures = [...squares];
    const index = latestSqaures.findIndex(e => e.id === id);
    latestSqaures[index].on = !latestSqaures[index].on;
    setSquares(latestSqaures);
  }

  const squareElements = squares.map(e => (
    <Box id ={e.id} key = {e.id}  on ={e.on} handleClick = {(id) => handleClick(id)}/>
  ))

  return(
    <div>
      {squareElements}
    </div>
  )
}

export default App;
