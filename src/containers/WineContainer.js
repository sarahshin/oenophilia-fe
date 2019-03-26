import React from "react";
import WineList from '../components/WineList'
import WineCategoryList from '../components/WineCategoryList'

//maybe change to a functional component depending on where state is held

class WineContainer extends React.Component {

  render() {
    return (
      <div>
        <WineCategoryList filteredVarietals={this.props.filteredVarietals}/>
        <WineList wines={this.props.wines}/>
      </div>
    )
  }
}
export default WineContainer
