import React from "react";
import WineList from '../components/WineList'
import WineCategoryList from '../components/WineCategoryList'

//maybe change to a functional component depending on where state is held

class WineContainer extends React.Component {

  state = {
    checked: null,
    filteredWines: []
  }

  handleCheck = pickedWine =>{
    //console.log("Hellooooo from Container", wine);
    //console.log(pickedWine);
    const filtered = this.props.wines.filter(wine => {
      return (wine.variety === pickedWine)

      })
      let checkedWines = [...this.state.filteredWines, filtered]
      this.setState({
        filteredWines: checkedWines
      })

      //console.log(filtered);
  }

  render() {
    //console.log(this.state.filteredWines);

    return (
      <div>
        <WineCategoryList filteredVarietals={this.props.filteredVarietals}/>
        handleWineCheck={this.handleCheck}/>
        <WineList wines={this.props.wines}/>
      </div>
    )
  }
}
export default WineContainer
