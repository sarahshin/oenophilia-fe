import React from "react"
import Pairs from './Pairs'

import { Card } from 'semantic-ui-react'

const PairingList = ({ foodwines, foods, wines, reviews }) => {

  const myReviews = reviews.filter(myReview => parseInt(myReview.user_id) === parseInt(localStorage.id))
  const myFoodWines = myReviews.map(myFW => foodwines.find(foodwine => myFW.foodwine_id === foodwine.id))

  const renderPairs = () => {
    console.log(myFoodWines)
    return myFoodWines.map(pair => <Pairs key={`pair_${pair.id}`} pair={pair} foods={foods} wines={wines}/>)
  }

  return (
  <div className="border">
    <h3>Previous Pairings:</h3>
    <Card.Group>
      {renderPairs()}
    </Card.Group>
  </div>
  )
}

export default PairingList
