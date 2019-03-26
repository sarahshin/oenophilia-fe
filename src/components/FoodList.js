import React from "react"
import Food from './Food'

import { Button } from 'semantic-ui-react'

const FoodList = ({ foods }) => {
  const renderFood = () => {
    return foods.map(food => <Food key={food.name} fooditem={food} />)
  }

  return (
  <div className="border">
    <Button.Group>
      {renderFood()}
    </Button.Group>
  </div>
  )
}

export default FoodList
