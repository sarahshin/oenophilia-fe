import React, { Component } from 'react';
import logo from './logo.svg';
import FoodContainer from './containers/FoodContainer'
import WineContainer from './containers/WineContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodContainer />
        <WineContainer />
      </div>
    );
  }
}

export default App;
