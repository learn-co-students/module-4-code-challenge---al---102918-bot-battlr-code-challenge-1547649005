import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  }

  addingBotsToArmyDown = (bot) => {
    console.log(bot);
    let newArr = [...this.state.army, bot]
    newArr = newArr.filter(Bot => Bot.id !== bot.id);
    this.setState({
      army: newArr
    })
  }

  addingBotsToArmy = (bot) => {
    let newArr = [...this.state.army, bot]
    this.setState({
      army: newArr
    })
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => {
      this.setState({
        bots
      })
    })
  }

  render() {
    console.log(this.state.army);
    return (
      <div>
        <BotCollection bots={this.state.bots} addingBotsToArmy={this.addingBotsToArmy} />
        <YourBotArmy army={this.state.army} addingBotsToArmy={this.addingBotsToArmyDown}/>
      </div>
    );
  }

}

export default BotsPage;
