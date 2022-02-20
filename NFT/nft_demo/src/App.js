import React from 'react';
import { useEffect, useState } from 'react';
import { loadWeb3, loadBlockChainData, } from './web3_utils';
import NavBar from "./NavBar/NavBar";
import './App.css'

const App = () => {
  
  const [account, setAccout] = useState(null);
  const [contract, setContract] = useState(null);
  const [exisitingColors, setExisitingColors] = useState([]);
  const [totalSupply, setTotalSupply] = useState(null);
  const [color, setColor] = useState("");

  const load = async () => {
    await loadWeb3();
    await loadBlockChainData(setAccout, setContract, setExisitingColors, setTotalSupply);
    console.log(exisitingColors);
  }
  useEffect(() => {
    load();
  }, [])

  const mint = async () => {
    if(color !== ''){
      await contract.methods.mint((color.includes("#") ? "#"+color : color)).send({from: account}).once('receipt', (receipt) => {
        let list = [...exisitingColors, color];
          setExisitingColors([...exisitingColors, ("#"+color)]);
          setTotalSupply(totalSupply + 1);
       });
    } else {
        window.alert('Please enter a valid color');
    }
      
      console.log([...exisitingColors, ("#"+color)]);
  
  }

  return( 
    <div>
    <NavBar address = {account}/>
      <div id='supply-text'>
          Total Collected: {totalSupply}
      </div>
    <div id='form-id'>
      <form>
        <input id='input' type="text" placeholder="Enter a hex-value" onChange={(e) => setColor(e.target.value)} value = {color}/>
        <button onClick={mint} id='mint-button'>Mint</button>
      </form>
    </div>
    <div id='colors-tab' style={{display: 'flex', marginTop: 100}}>
        {exisitingColors.map((color, index) => (
          <div key={index} style = {{backgroundColor: color, height: "220px", width: "220px", marginLeft: index === 0 ? 130 : 50, borderRadius: 120}}>
            <div>{color}</div>
          </div>
        ))}
    </div>
    </div>
  )
}

export default App;
