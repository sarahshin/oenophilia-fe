import React from "react";
import WineList from '../components/WineList'
import WineCategoryList from '../components/WineCategoryList'

//maybe change to a functional component depending on where state is held

class WineContainer extends React.Component {

  state = {
    checked: false,
    filteredWines: []
  }

  handleCheck = (e) => {
    console.log(e.target.checked);

     let filteredWines = this.props.wines.filter(wine => wine.variety === e.target.value)
    if(e.target.checked === true){
         this.setState({
           filteredWines: [...this.state.filteredWines, ...filteredWines]
         })
       } else if(e.target.checked === false){
         let alteredList = this.state.filteredWines.filter(wine => wine.variety !== e.target.value)
         this.setState({
           filteredWines: alteredList
         })
        //console.log("Hellooooo", e.target.value);
        }

   }

  render() {

    return (
      <div>
        <WineCategoryList
          filteredVarietals={this.props.filteredVarietals}
          handleWineCheck={this.handleCheck}
          checked={this.state.checked}
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
