import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    allRobots: [],
    armyRobots: []
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

  addToArmy = (e, bot) => {
    let output = [...this.state.armyRobots, bot];

    if (!this.state.armyRobots.includes(bot)) {
      this.setState({
        armyRobots: output
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

        <BotCollection
          allRobots={this.state.allRobots}
          armyHandler={this.addToArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
