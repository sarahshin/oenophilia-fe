import React from "react"
import Wine from './Wine'

const WineList = ({ wines }) => {
  const renderWine = () => {
    return wines.map(wine => <Wine key={wine.name} wineitem={wine} />)
  }

  return (
  <div className="border">
    Individual Wines
    {renderWine()}
  </div>
  )
}

export default WineList
