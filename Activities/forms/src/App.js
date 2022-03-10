import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState(
    { firstName: "", secondName: "" }
  );

  console.log(data);

  const handleChange = (event) => {
      setData(prevData => {
        return {
          ...prevData,
          [event.target.name]: event.target.value,
        }
      })
  }

  return(
    <div>
    <form>
    <input type="text" name = "firstName" onChange = {handleChange} value={data.firstName}/>
    <input type = "text" name = " secondName" onChange = {handleChange} value={data.secondName}/>
    </form>
    </div>
  )
}

export default App;
