import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    clickedBots: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => this.setState({ bots: data }));
  }

  renderBotInArmy = bot => {
    console.log("rendered!", bot.state.clicked);
    if (bot.state.clicked === true) {
      console.log("true");
      let newClickedBot = [...this.state.clickedBots, bot];
      this.setState({
        clickedBots: newClickedBot
      });
      console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.clickedBots} />
        <BotCollection
          bots={this.state.bots}
          renderBotInArmy={this.renderBotInArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
