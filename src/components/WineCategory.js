import React, { Fragment } from 'react'

import { Card } from 'semantic-ui-react'

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
