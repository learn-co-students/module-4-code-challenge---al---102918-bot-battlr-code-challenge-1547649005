import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs.js";

class BotsPage extends React.Component {
  state = {
    allRobots: [],
    armyRobots: [],
    toggle: false,
    currentBot: {}
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(robots => {
        this.setState({
          allRobots: robots
        });
      });
  }

  toggleOn = (e, bot) => {
    console.log(bot);
    this.setState({
      toggle: !this.state.toggle,
      currentBot: bot
    });
  };

  addToArmy = (e, bot) => {
    let output = [...this.state.armyRobots, bot];

    if (!this.state.armyRobots.includes(bot)) {
      this.setState({
        armyRobots: output,
        toggle: false
      });
    }
  };

  removeFromArmy = (e, bot) => {
    let output = this.state.armyRobots.filter(robot => {
      return robot !== bot;
    });

    this.setState({
      armyRobots: output
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          armyRobots={this.state.armyRobots}
          armyHandler={this.removeFromArmy}
        />

        {this.state.toggle ? (
          <BotSpecs
            bot={this.state.currentBot}
            toggleOff={this.toggleOn}
            addToArmy={this.addToArmy}
          />
        ) : (
          <BotCollection
            allRobots={this.state.allRobots}
            armyHandler={this.addToArmy}
            toggleOn={this.toggleOn}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
