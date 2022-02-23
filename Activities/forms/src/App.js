import React from "react";
import './App.css';
import { useState } from 'react';

const App = () => {
  
  const [text, setText] = useState('');

  const submitForm = (e) => {
    e.preventDefault();  
    console.log(e.target.elements.text);

  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setText(e.target.value);
  }

  return(
    <div>
      <form onSubmit={submitForm}>
        <input type = 'text' placeholder = "Text goes here" value  = {text} onChange = {handleChange}/>
      <button type = 'submit' > Submit </button>  
    </form>
    </div>
  )
}

export default App;
