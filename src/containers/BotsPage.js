import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    myFavorites: []
  }
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(data => this.setState({ bots: data }));
  }

  addBotToArmy = (e) =>  {
    console.log(e.target.src)
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myFavorite}/>
        < BotCollection bots={this.state.bots} addBotToArmy={this.addBotToArmy}  />
      </div>
    );
  }

}

export default BotsPage;
