import React from "react"
import Wine from './Wine'

import { Card } from 'semantic-ui-react'

const FullWineList = ({ wines, wineListToggle }) => {

  const renderWines = () => {
    return wines.map(wine => <Wine key={`listed_${wine.name}`} wineitem={wine} wineListToggle={wineListToggle} />)
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
