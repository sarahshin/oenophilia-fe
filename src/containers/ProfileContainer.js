import React from "react";
import FullWineList from '../components/FullWineList'
import PairingList from '../components/PairingList'

//also maybe change to a functional component based on where state is held

class ProfileContainer extends React.Component {

  render() {
    return (
      <div>
        {this.props.wineListToggle ? <FullWineList wines={this.props.wines}/> : null}
        {this.props.pairsToggle ? <PairingList foodwines={this.props.foodwines} foods={this.props.foods} wines={this.props.wines} reviews={this.props.reviews}/> : null}
      </div>
    )
  }
}
export default ProfileContainer
