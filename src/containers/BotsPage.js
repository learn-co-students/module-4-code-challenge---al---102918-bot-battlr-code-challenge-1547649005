import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {

  state = {
    botArr : [],
    armyArr : [],
    display: true,
    bot: {}
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(data => this.setState({
        botArr: data
      }))
  }

  handleClick = (bot) => {
      let newBot = {...bot}
    this.setState({
      display: !this.state.display,
      bot: newBot
    })
  }

  enlist = (bot) => {
    if (!this.state.armyArr.includes(bot)) {
      let newArr = [...this.state.armyArr]
      newArr.push(bot)
      this.setState({
        armyArr : newArr
      })
    }
    else {
      let arr = [...this.state.armyArr].filter(obj => obj != bot)
      this.setState({
        armyArr : arr
      })
    }
  }

  toggleDisplay = () => {
    this.setState({
      display: !this.state.display
    })

  }



  render() {
    console.log(this.state.armyArr);
    return (
      <div>
        <YourBotArmy
          bots = {this.state.armyArr}
          handleClick = {this.handleClick}
        />
        <BotCollection
          display = {this.state.display}
          bots = {this.state.botArr}
          handleClick = {this.handleClick}
        />
        <BotSpecs
          display = {this.state.display}
          bot= {this.state.bot}
          enlist= {this.enlist}
          toggleDisplay = {this.toggleDisplay}
        />
      </div>
    );
  }

}

export default BotsPage;
