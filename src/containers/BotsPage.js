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
    if (bot.props.parent === "BotCollection") {
      if (bot.state.clicked === true) {
        console.log("true");
        let newClickedBot = [...this.state.clickedBots, bot];
        this.setState({
          clickedBots: newClickedBot
        });
        console.log(this.state);
      } else null;
    } else {
      if (bot.state.clicked === false) {
        let unclickingBot = [...this.state.clickedBots];
        var index = unclickingBot.indexOf(bot);
        console.log(index);

        unclickingBot.splice(index, 1);
        this.setState({
          clickedBots: unclickingBot
        });
      }
    }
  };

  render() {
    return (
      <div>
        <YourBotArmy
          parent="YourBotArmy"
          bots={this.state.clickedBots}
          renderBotInArmy={this.renderBotInArmy}
        />
        <BotCollection
          parent="BotCollection"
          bots={this.state.bots}
          renderBotInArmy={this.renderBotInArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
