import React from "react";
import WineList from '../components/WineList'

//maybe change to a functional component depending on where state is held

class WineContainer extends React.Component {

  render() {
    return (
      <div>
        <WineList wines={this.props.wines}/>
      </div>
    )
  }
}
export default WineContainer
