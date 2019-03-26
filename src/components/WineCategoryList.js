import React, { Component } from 'react'

import WineCategory from './WineCategory'

import { Card, Icon, Image } from 'semantic-ui-react'

export default class WineCategoryList extends Component {



  renderCategories() {
    const uniqueWines = [...new Set( this.props.wines.map(wine => wine.variety)) ];
    return uniqueWines.map(wine => <WineCategory wine={wine}
    handleWineCheck={this.props.handleWineCheck}/>)
  }

  render() {
    //console.log(this.props);
    return(
      <Card.Group>

        {this.renderCategories()}
      </Card.Group>
    )
  }
}
