import React, { Component } from 'react'

import WineCategory from './WineCategory'

import { Card } from 'semantic-ui-react'

export default class WineCategoryList extends Component {



  renderCategories() {
    const uniqueWines = [...new Set( this.props.wines.map(wine => wine.variety)) ];
    return uniqueWines.map(wine => <WineCategory wine={wine}
    handleWineCheck={this.props.handleWineCheck}/>)
  }

  render() {
    //console.log(this.props);
    return(
      <div className="border">
        <Card.Group>
          {this.renderCategories()}
        </Card.Group>
      </div>
    )
  }
}
