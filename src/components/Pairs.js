import React from "react"

import { Card } from 'semantic-ui-react'

const Pairs = ({ pair, foods, wines }) => {
  //console.log(wineitem);

  const findFood = foods.find(food => food.id === pair.food_id)
  const findWine = wines.find(wine => wine.id === pair.wine_id)

  return (
  <React.Fragment>
    <Card>
      <Card.Content>
        <p>{findFood.name}</p>
        <p>{findWine.name}</p>
      </Card.Content>
    </Card>
  </React.Fragment>)
}

export default Pairs
