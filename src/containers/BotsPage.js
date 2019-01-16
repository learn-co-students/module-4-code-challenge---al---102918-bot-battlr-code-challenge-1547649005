import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    botArmy: [],
  }

  componentDidMount = () =>{
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(allBots => this.setState({allBots}))
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



  render() {

    return (
      <div>
        <YourBotArmy toggleDetails={this.removeBot} bots={this.state.botArmy} addOrRemove={this.removeBot}/>

        <BotCollection  allBots={this.state.allBots} addOrRemove={this.addToArmy} />)

      </div>
    );
  }

}

export default BotsPage;
