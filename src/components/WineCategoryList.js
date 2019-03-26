import React, { Component } from 'react'

import WineCategory from './WineCategory'

import { Card, Icon, Image } from 'semantic-ui-react'

export default class WineCategoryList extends Component {

  renderCategories() {
    const uniqueWines = [...new Set( this.props.wines.map(wine => wine.variety)) ];
    return uniqueWines.map(wine => <WineCategory wine={wine}/>)
  }

  render() {
    return(
      <Card.Group>
        {this.renderCategories()}
      </Card.Group>
    )
  }
}
