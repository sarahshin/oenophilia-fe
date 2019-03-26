import React from "react"

import { Button, Icon } from 'semantic-ui-react'

const Food = ({fooditem}) => {
  return (
  <div className="">
    <Button icon>
      <Icon name='pause' />
      {fooditem.name}
    </Button>
  </div>
  )
}

export default Food
