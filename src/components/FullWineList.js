import React from "react"
import Wine from './Wine'

import { Card } from 'semantic-ui-react'

const FullWineList = ({wines}) => {

  const renderWines = () => {
    return wines.map(wine => <Wine key={`listed_${wine.name}`} wineitem={wine} />)
  }

  return (
  <div className="border">
    <Card.Group>
      {renderWines()}
    </Card.Group>
  </div>
  )
}

export default FullWineList
