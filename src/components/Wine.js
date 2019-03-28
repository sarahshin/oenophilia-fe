import React from "react"

import { Card, Button, Icon } from 'semantic-ui-react'

const Wine = ({ wineitem, addToFavorites, addToPairings, selectedfood }) => {
  //console.log(selectedfood);

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
        { !localStorage.id ? null :
          <Button.Group>
            <Button color="red" attached="left" onClick={()=>handleClick(wineitem)} icon>
              <Icon name='heart outline' />
            </Button>
            <Button attached="right" onClick={()=>addToPairings(selectedfood, wineitem)} >
              Select
            </Button>
          </Button.Group>
        }
    </Card>
  </React.Fragment>)
}

export default Wine
