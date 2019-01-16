import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    bots: [],
    botArmy:[]
  }

  fetchBots = () => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  componentDidMount() {
    this.fetchBots()
  }

  handleAddBot = (botObj) => {
    const botArmy = [...this.state.botArmy, botObj]
    this.setState({
      botArmy
    })
  }

  handleRemoveBot = (botObj) => {
    const botArmy = [...this.state.botArmy].filter(bot => bot.id !== botObj.id)
    this.setState({
      botArmy
    })

  }

  render() {
    return (
      <div>
      <div>
      <YourBotArmy bots={this.state.botArmy} handleClick={this.handleRemoveBot}/>
      </div>
        <div>
        <BotCollection bots={this.state.bots} handleClick={this.handleAddBot}/>
        </div>
      </div>
    );
  }

}

export default BotsPage;
