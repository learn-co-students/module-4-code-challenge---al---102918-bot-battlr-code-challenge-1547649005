import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    clickedBot: []
  }

  getBots() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  componentDidMount() {
    this.getBots();
  }

  handleClick = event => {
    console.log('I work!')
    this.setState({
      clickedBot: event.target.value
    })
  }

  render() {
    return (
      <div>
      <h1>Bots Page</h1>
      <YourBotArmy
      bots = {this.state.clickedBot}/>
      <BotCollection
      bots = {this.state.bots}
      handleClick = {this.handleClick}
       />
      </div>
    );
  }

}

export default BotsPage;
