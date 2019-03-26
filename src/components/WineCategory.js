import React, { Component, Fragment } from 'react'

import { Card, Icon, Image } from 'semantic-ui-react'

const WineCategory = (props) => {
  //console.log(props);


  return(

    <Fragment>
      <Card>
        <Card.Content>
        <input className="wine-check-input" type="checkbox" onChange={()=> props.handleWineCheck(props.wine)} value={props.wine} checked={null}/>
        <label className="wine-check-label">
          {props.wine}
        </label>
        </Card.Content>
      </Card>
    </Fragment>
  )
}

export default WineCategory


// <div className="wine-check">
//             <input className="wine-check-input" type="radio" value={wine} checked={null}/>
//             <label className="wine-check-label">
//               `${wine}`
//             </label>
//     </div>
// </div>
