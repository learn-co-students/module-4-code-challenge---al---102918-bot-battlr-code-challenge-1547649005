import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

class BotsPage extends React.Component {
  state = {
    chosen: []
  };

  clickAddHandler = bot => {
    let chosenClone = [...this.state.chosen, bot];

    this.setState({
      chosen: chosenClone
    });
  };

  clickRemoveHandler = botObj => {
    let chosenClone = [];
    let removeClone = [...this.state.chosen].filter(bot => {
      if (bot.id !== botObj.id) {
        chosenClone.push(bot);
      }
    });

    this.setState({
      chosen: chosenClone
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          botList={this.state.chosen}
          clickHandler={this.clickRemoveHandler}
        />
        <BotCollection
          botList={this.props.botList}
          clickHandler={this.clickAddHandler}
        />
      </div>
    );
  }
}

export default BotsPage;
