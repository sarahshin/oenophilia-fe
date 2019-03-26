import React from "react"
import Wine from './Wine'

import { Card } from 'semantic-ui-react'

const WineList = (props) => {
  console.log(props.checkedWines);
  const renderWine = () => {
    return props.checkedWines.map(wine => <Wine key={wine.name} wineitem={wine} />)
  }

  return (
  <div className="border">
    Individual Wines
    <div className="center">
      <Card.Group>
        {renderWine()}
      </Card.Group>
    </div>
  </div>
  )
}

export default WineList
