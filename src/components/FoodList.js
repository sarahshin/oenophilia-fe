import React from "react"
import Food from './Food'

const FoodList = ({ foods }) => {
  const renderFood = () => {
    return foods.map(food => <Food key={food.name} fooditem={food} />)
  }

  return (
  <div className="border">
    {renderFood()}
  </div>
  )
}

export default FoodList
