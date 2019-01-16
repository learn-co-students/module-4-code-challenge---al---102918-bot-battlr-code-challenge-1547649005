import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  render() {
    let allBots = this.props.allRobots.map(robot => {
      return (
        <BotCard
          key={robot.id}
          bot={robot}
          armyHandler={this.props.armyHandler}
        />
      );
    });
    return (
      <div className="ui four column grid">
        <div className="row">
          {allBots}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
