import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    filteredArr: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          bots: data
        })
      );
  }

  handleClick(myBot, value) {
    let newBots = [...this.state.bots];
    newBots.filter(bot => {
      myBot;
    });
    let newFilteredArr = [myBot, ...this.state.filteredArr];
    this.state({
      filteredArr: newFilteredArr
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        {/* put your components here */}
        <YourBotArmy likedBot={this.state.filteredArr} />
        <BotCollection
          allBots={this.state.bots}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default BotsPage;
