import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    chosen: [],
    showBotSpecs: false,
    showBot: {}
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

  clickShowBotSpecsHandler = bot => {
    this.setState({
      showBotSpecs: !this.state.showBotSpecs,
      showBot: bot
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          botList={this.state.chosen}
          clickHandler={this.clickRemoveHandler}
        />
        

        {this.state.showBotSpecs ? (
          <BotSpecs
            bot={this.state.showBot}
            clickAddHandler={this.clickAddHandler}
            clickShowBotSpecsHandler={this.clickShowBotSpecsHandler}
          />
        ) : (
          <BotCollection
            botList={this.props.botList}
            clickHandler={this.clickShowBotSpecsHandler}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
