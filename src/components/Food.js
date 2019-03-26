import React from "react"
import { Button, Icon } from 'semantic-ui-react'

const Food = ({fooditem, selectFood}) => {

  const handleClick = (fooditem) => {
    selectFood(fooditem.name)
  }

  return (
  <div className="">
    <Button onClick={() => handleClick(fooditem)} icon>
      <Icon name='pause' />
      {fooditem.name}
    </Button>
  </div>
  )
}

export default Food
