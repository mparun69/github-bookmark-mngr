import React, {useState} from 'react';

import icon from "./assets/icon.png";

import Home from "./components/Home";
import AddRepos from "./components/AddRepos"

import './App.css';

function App() {
  const [isHome, setIsHome] = useState(true);
  
  return (

       <div className="App">
        <div className="nav-container">
          <img src={icon} alt="icon" className="icon" />
          <p className="nav-links" onClick={()=>(setIsHome(true))}> 
              Home
          </p>
          <p className="nav-links" onClick={()=>(setIsHome(false))}>
              Add Repository
          </p>
        </div>
        <div className="main-container">
          {isHome? <Home/>:<AddRepos/>}
        </div>
    </div>

  );

}

export default App;
