import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import Search from "../components/Search"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    botArmy: [],
    updatedList: []
  }

  componentDidMount = () =>{
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(allBots => this.setState({allBots, updatedList: allBots}))
  }

  addToArmy = (bot) =>{
    if (!this.state.botArmy.includes(bot)){
      let newArr = [...this.state.botArmy, bot]
      this.setState({botArmy: newArr})
    }
  }

  removeBot = (bot) =>{
    let newArr = [...this.state.botArmy]
    newArr = newArr.filter((current)=>{
      return current.id != bot.id
    })
    this.setState({botArmy: newArr})
  }

  updateFilter = (newArr) =>{
    this.setState({updatedList: newArr})
  }


  render() {

    return (
      <div>
        <Search updateFilter={this.updateFilter} allBots={this.state.allBots}/>

        <YourBotArmy toggleDetails={this.removeBot} bots={this.state.botArmy} addOrRemove={this.removeBot}/>

        <BotCollection  allBots={this.state.updatedList} addOrRemove={this.addToArmy} />)

      </div>
    );
  }

}

export default BotsPage;
