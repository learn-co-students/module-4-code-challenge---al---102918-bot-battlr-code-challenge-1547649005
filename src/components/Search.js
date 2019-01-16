import React, {Component} from 'react'

export default class Search extends Component {

  state = {
    currentText: ""
  }

  filterArray = () =>{
    let newArr = [...this.props.allBots]
    newArr = newArr.filter((bot)=>{
      return bot.name.includes(this.state.currentText)
    })
    this.props.updateFilter(newArr)
  }

  handleChange = (e) =>{
    this.setState({currentText: e.target.value},this.filterArray())

  }


  render(){
    return (
      <form>
        <h1>SEARCH:</h1>
        <input onChange={this.handleChange} value={this.state.currentText}type="text" placeholder="Search here..." />
      </form>
    )
  }
}
