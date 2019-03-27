import React from "react"
import Food from './Food'

import { Button } from 'semantic-ui-react'

const FoodList = ({foods, selectFood, addToPairings}) => {

  const renderFood = () => {
    return foods.map(food => <Food selectFood={selectFood} key={food.name} fooditem={food}
    addToPairings={addToPairings} />)
  }

  return (
  <div className="border">
    <h3>Select a Food Group:</h3>
    <Button.Group>
      {renderFood()}
    </Button.Group>
  </div>
  )
}

export default FoodList
