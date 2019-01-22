import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy.js";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    selectedBots: []
  };
  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => response.json())
      .then(botData =>
        this.setState({
          bots: botData
        })
      );
  }

  handleSelectedBots = bot => {
    // console.log(bot);
    let newArrSelected = [...this.state.selectedBots];
    if (newArrSelected.includes(bot)) {
      newArrSelected = [...this.state.selectedBots];
    } else {
      newArrSelected = [bot, ...this.state.selectedBots];
    }
    this.setState({
      selectedBots: newArrSelected
    });
  };

  handleUnselectBots = botObj => {
    let newArrUnselected = [...this.state.selectedBots].filter(
      bot => bot !== botObj
    );

    this.setState({
      selectedBots: newArrUnselected
    });
  };

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
          selectedBots={this.state.selectedBots}
          handleUnselectBots={this.handleUnselectBots}
        />
        <BotCollection
          bots={this.state.bots}
          handleSelectedBots={this.handleSelectedBots}
        />
      </div>
    );
  }
}

export default BotsPage;
