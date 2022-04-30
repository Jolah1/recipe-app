import React, {useEffect, useState} from "react";
import './App.css';


const App = () => {

const APP_ID = "a0d37b32";
const APP_KEY = "f9f60e2c85102ae58dc2a9c95767891d";
const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

const [counter, setCounter] = useState(0);

useEffect(() =>{
console.log("Effect has been run");
});

  return(
<div className="App">
<form className="search-form">
  <input className="search-bar" type="text" />
  <button className="search-button" type="Submit">search</button>
</form>
<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
</div>
  );
}




export default App;