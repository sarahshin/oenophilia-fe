import React, { Component } from 'react';
// import logo from './logo.svg';
import FoodContainer from './containers/FoodContainer'
import WineContainer from './containers/WineContainer'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

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
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical visible width='thin'>
            <Menu.Item as='a'>
              <Icon name='sign-in' />
              Login
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='sign-out  ' />
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
              <FoodContainer foods={this.state.foods}/>
              <WineContainer wines={this.state.wines}/>
            </Segment.Inline>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
