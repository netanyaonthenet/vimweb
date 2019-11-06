import React, { Component } from 'react';
//import { BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Style from './components/Style.js';
import Carouselfunc from './components/Carouselfunc.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


//import MediaQuery from 'react-responsive';
class App extends Component {
render(){
  return(
    <div id='All'>
    <div class="App">
    <Style />
    </div>
    <div class="App2">
    <Carouselfunc />
    </div>
    </div>
  )
}
}


export default App
