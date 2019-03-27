import React from "react"
import Pairs from './Pairs'

import { Card } from 'semantic-ui-react'

const PairingList = ({ foodwines, foods, wines }) => {

  const myFoodWines = foodwines.filter(myFW => parseInt(myFW.user_id) === parseInt(localStorage.id))

  const renderPairs = () => {
    console.log(myFoodWines)
    return myFoodWines.map(pair => <Pairs key={`pair_${pair.id}`} pair={pair} foods={foods} wines={wines}/>)
  }

  return (
  <div className="border">
    <h3>Previous Reviews:</h3>
    <Card.Group>
      {renderPairs()}
    </Card.Group>
  </div>
  )
}

export default PairingList
