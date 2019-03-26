import React, { Component } from 'react';
// import logo from './logo.svg';
import FoodContainer from './containers/FoodContainer'
import WineContainer from './containers/WineContainer'
import LoginForm from './components/LoginForm'
import Registration from './components/Registration'

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'

class App extends Component {
  //LIFECYCLE*******************************************************************
  state = {
    foods: [],
    wines: [],
    users: [],
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    birthday: "",
    logged: false,
    loginToggle: false,
    registrationToggle: false,
    foodwines: [],
    filteredVarietals: [],
  }

  componentDidMount() {
    this.fetchFoods()
    this.fetchWines()
    this.fetchUsers()
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

  fetchUsers() {
    fetch('http://localhost:3000/api/v1/users')
    .then(r => r.json())
    .then(users => this.setState({users}))
  }

  createUser = (event) => {
    event.preventDefault()
    const data = {
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      birthday: this.state.birthday
    }
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(user => {
      localStorage.setItem('id',user.id)
      this.setState({
        users: [...this.state.users,user],
        registrationToggle: false,
        email: "",
        password: "",
        firstname: "",
        lastname: ""
      })
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleLogin = (event) => {
    event.preventDefault()
    const user = this.state.users.find(user => user.email === this.state.email && user.password === this.state.password);
    if (!!user) {
      localStorage.setItem('id', user.id)
      this.setState({logged: true, loginToggle: false})
    } else {
      return alert("Please double check your email or password.")
    }
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({logged: false})
  }

  handleLoginToggle = () => {
    this.setState({loginToggle: !this.state.loginToggle, registrationToggle: false})
  }

  handleRegistrationToggle = () => {
    this.setState({registrationToggle: !this.state.registrationToggle, loginToggle: false})
  }

  render() {
    return (
      <div className="App">
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical visible width='thin'>
            { localStorage.getItem('id') ? <React.Fragment><Menu.Item onClick={this.handleLogout} as='a'>
              <Icon name='sign-out' />
              Logout
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='heart' />
              Favorite
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='food'/>
              Past Wines Pairings
            </Menu.Item></React.Fragment> :
            <Menu.Item onClick={this.handleLoginToggle} as='a'>
              <Icon name='sign-in' />
              Login
            </Menu.Item>
            }
            { localStorage.getItem('id') ? null : <Menu.Item onClick={this.handleRegistrationToggle} as='a'>
              <Icon name='user' />
              Sign Up
            </Menu.Item>}
            <Menu.Item as='a'>
              <Icon name='glass martini'/>
              Wine List
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment.Inline>
              {this.state.loginToggle ? <LoginForm handleChange={this.handleChange} handleLogin={this.handleLogin} email={this.state.email} password={this.state.password}/> : null}
              {this.state.registrationToggle ? <Registration handleChange={this.handleChange} password={this.state.password} lastname={this.state.lastname} firstname={this.state.firstname} email={this.state.email} createUser={this.createUser}/> : null}
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
