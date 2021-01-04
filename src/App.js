import React, { Component } from 'react';
import './App.css';
import globe from './img/globe.png';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="landing-container">
        <h2 className="pretitle">
          UC Irvine ICS Student Council
        </h2>
        <h1 className="main-title">
          Jam for Change 2021
        </h1>
        <h3 className="dates">
          Feb 15th - Feb 19th
        </h3>
        <img src={globe} alt="globe" className="globe-img"></img>
        <div className="register-container">
          <Button className="register-btn">Register Now</Button>
        </div>
      </div>
    )
  }
}

export default App;
