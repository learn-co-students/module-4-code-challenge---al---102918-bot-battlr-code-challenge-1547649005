import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {

  state = {
    botArr : [],
    filteredBots: [],
    armyArr : [],
    display: true,
    bot: {},
    search: ''
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(data => this.setState({
        botArr: data,
        filteredBots: data
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
        armyArr : newArr,
        display: !this.state.display
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


  changeHandler = (e) => {
    let newArr = [...this.state.botArr].filter(bot => bot.bot_class.toLowerCase().includes(e.target.value))

    this.setState({
      filteredBots: newArr
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy
          bots = {this.state.armyArr}
          handleClick = {this.enlist}
          changeHandler = {this.changeHandler}
        />
        <BotCollection
          display = {this.state.display}
          bots = {this.state.filteredBots}
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
