import React from "react"
import Wine from './Wine'

import { Card } from 'semantic-ui-react'

const WineList = ({ wines }) => {
  const renderWine = () => {
    return wines.map(wine => <Wine key={wine.name} wineitem={wine} />)
  }

  return (
  <div className="border">
    Individual Wines
    <Card.Group>
      {renderWine()}
    </Card.Group>
  </div>
  )
}

export default WineList
