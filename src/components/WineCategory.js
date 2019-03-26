import React, { Component, Fragment } from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'

const WineCategory = ({wine}) => {

  return(
    <Fragment>
      <Card>
        <Card.Content>
          <p>{wine}</p>
        </Card.Content>
      </Card>
    </Fragment>
  )
}

export default WineCategory
