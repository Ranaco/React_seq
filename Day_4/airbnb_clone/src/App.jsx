import React from 'react';
import NavBar from './NavBar/NavBar';
import GroupImage from './GroupImage/GroupImage';
import './App.css';
import Card from './Card/Card';
import About from './About/About';
import { Data } from './Data';

const App = () => {
  return(
    <div>
    <NavBar/>
    <GroupImage/>
    <About/>
    <div id='card-base'>
    {Data.map(item => <Card country={item.country} desc={item.desc} image={item.image} price={item.price} rating={item.rating} review={item.review} />)}
    </div>
    App
    </div>
  )
}

export default App;
