import logo from './logo.svg';
import './App.css';


const Header = () => {
  return (
      <h1 id='header'>
        Fun facts about React js
      </h1>
  )
}

const NavBar = () => {
  return (
    <div id = "NavBar">
      <p className='react_image'>
          <img src={ logo } alt ="nothing"></img>
      </p>
        <div >
          Home
        </div>
        <div >
          About
        </div>
        <div >
          Contact
        </div>
        <div >
          Blog
        </div>
    </div>
  )
}

const List = () => {
  return (
    <div id='list'>
      <ul>
        <li>
          Was first released in 2013
          </li>
        <li>
          Was created by Facebook
          </li>
        <li>
          Has well over 1 million stars on GitHub
        </li>
        <li>
          Was originally created by Jordan Walke
        </li>
        <li>
          Powers thousands of enterprise applications, including Facebook, Google, and Instagram
        </li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar />
          <Header />     
          <List />
          <footer style={{"paddingLeft": "15%"}}>
            © 2020 React js
          </footer>
    </div>
  );
}

export default App;
