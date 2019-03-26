import React from "react"

import { Card, Icon, Image } from 'semantic-ui-react'

const Wine = ({ wineitem }) => {
  return (
  <React.Fragment>
    <Card>
      <Card.Content>
        <p>{wineitem.name}</p>
        <p>{wineitem.category}</p>
        <p>{wineitem.variety}</p>
        <p>{wineitem.description}</p>
      </Card.Content>
      <img src={wineitem.img} style={{width:'50px'}} alt={wineitem.name}/>
    </Card>
  </React.Fragment>
  )
}

export default Wine
