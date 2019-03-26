import React, { Component } from 'react';
// import logo from './logo.svg';
import FoodContainer from './containers/FoodContainer'
import WineContainer from './containers/WineContainer'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

class App extends Component {
  //LIFECYCLE*******************************************************************
  state = {
    foods: [],
    wines: [],
    foodwines: [],
    filteredVarietals: [],
  }

  componentDidMount() {
    this.fetchFoods()
    this.fetchWines()
    this.fetchFoodwines()
  }

  //EVENT LISTENERS*************************************************************
  selectFood = (fooditem) => {
    let selectedFood = this.state.foods.find(food => food.name === fooditem)
    let relevantPairs = this.state.foodwines.filter(pair => pair.food_id === selectedFood.id)
    let relevantWines = relevantPairs.map(pair => pair.wine_id)
    let newFilteredVarietals = this.state.wines.filter(wine => relevantWines.includes(wine.id))
    this.setState({
      filteredVarietals: newFilteredVarietals
    })
  }

  //FETCH***********************************************************************
  fetchFoods() {
    fetch('http://localhost:3000/api/v1/foods')
    .then(r => r.json())
    .then(foods => this.setState({foods}))
  }

  fetchWines() {
    fetch('http://localhost:3000/api/v1/wines')
    .then(r => r.json())
    .then(wines => {
      this.setState({
        wines: wines,
        filteredVarietals: wines
      })
    })
  }

  fetchFoodwines() {
    fetch('http://localhost:3000/api/v1/foodwines')
    .then(r => r.json())
    .then(foodwines => this.setState({ foodwines }))
  }

  //VIEW************************************************************************
  render() {
    //console.log(this.state.foods)
    //console.log(this.state.wines)
    return (
      <div className="App">
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical visible width='thin'>
            <Menu.Item as='a'>
              <Icon name='sign-in' />
              Login
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='sign-out' />
              Logout
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='user' />
              Sign Up
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='user' />
              Profile
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='edit' />
              Edit Profile
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='heart' />
              Favorite
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='food'/>
              Past Wines Pairings
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='glass martini'/>
              Wine List
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment.Inline>
              <FoodContainer foods={this.state.foods} selectFood={this.selectFood}/>
              <WineContainer wines={this.state.wines} filteredVarietals={this.state.filteredVarietals}/>
            </Segment.Inline>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>

    );
  }
}

export default App;
