import React from "react"

import { Card, Button, Icon } from 'semantic-ui-react'

const Wine = ({ wineitem, addToFavorites, addToPairings, wineListToggle }) => {
  //console.log(wineitem);

  const handleClick = (wineitem) => {
    addToFavorites(wineitem.id, parseInt(localStorage.id))
  }

  return (
  <React.Fragment>
    <Card>
      <Card.Content>
      <h4>{wineitem.name}</h4>
      <h5>{wineitem.catagory}</h5>
      <p>{wineitem.variety}</p>
      <p>{wineitem.description}</p>
      </Card.Content>
      <img src={wineitem.img} style={{width:'50px'}} alt={wineitem.name} />
      { wineListToggle ? null : <React.Fragment>
        <Button onClick={()=>handleClick(wineitem)} icon color='red'>
        <Icon name='heart outline' />
        </Button>
        <Button onClick={()=>addToPairings(wineitem)}>
          Select
        </Button>
      </React.Fragment>}
    </Card>
  </React.Fragment>)
}

export default Wine
