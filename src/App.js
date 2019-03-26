import React, { Component } from 'react';
import logo from './logo.svg';
import FoodContainer from './containers/FoodContainer'
import WineContainer from './containers/WineContainer'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends Component {
  state = {
    foods: [],
    wines: [],
  }

  componentDidMount() {
    this.fetchFoods()
    this.fetchWines()
  }

  fetchFoods() {
    fetch('http://localhost:3000/api/v1/foods')
    .then(r => r.json())
    .then(foods => this.setState({foods}))
  }

  fetchWines() {
    fetch('http://localhost:3000/api/v1/wines')
    .then(r => r.json())
    .then(wines => this.setState({wines}))
  }

  render() {
    console.log(this.state.foods)
    console.log(this.state.wines)
    return (
      <div className="App">
        <FoodContainer foods={this.state.foods}/>
        <WineContainer wines={this.state.wines}/>
      </div>
    );
  }
}

export default App;
