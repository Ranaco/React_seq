import React from 'react';
import './body.css'

const Body = () =>{
    return (
        <div id = 'body'>
          <div id = 'top'>
              Fun Facts about React
              </div>
              <ul id = "list">
                    <li>React is a JavaScript library for building user interfaces</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>
                        React is maintained by Facebook
                    </li>
                    <li>
                        React is open source
                    </li>
                    <li>
                        React is used by over 1.5 million developers
                    </li>
              </ul>
        </div>
    )
}

export default Body;