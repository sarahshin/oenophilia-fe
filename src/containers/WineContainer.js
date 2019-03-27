import React from "react";
import WineList from '../components/WineList'
import WineCategoryList from '../components/WineCategoryList'
import FullWineList from '../components/FullWineList'

//maybe change to a functional component depending on where state is held

class WineContainer extends React.Component {

  state = {
    checked: null,
    filteredWines: [],
  }

  handleCheck = (pickedWine) => {
    let filteredWines = this.props.wines.filter(wine => wine.variety === pickedWine)
    if (this.state.checked === null){
      this.setState({
        filteredWines: filteredWines,
        checked: true
      })
    } else if(this.state.checked === true){
    this.setState({
      filteredWines: [...this.state.filteredWines, ...filteredWines]
    })
  }
 }

  render() {
    return (
      <div>
        {this.props.wineListToggle ?
          <FullWineList
            wines={this.props.wines}
          /> :
          null
        }
        <WineCategoryList
          filteredVarietals={this.props.filteredVarietals}
          handleWineCheck={this.handleCheck}
        />
        <WineList
          checkedWines={this.state.filteredWines}
          checked={this.state.checked}
        />
      </div>
    )
  }
}
export default WineContainer
