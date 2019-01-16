import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    let armyBots = this.props.armyRobots.map(robot => {
      console.log(robot);
      return (
        <BotCard key={robot.id} bot={robot} toggle={this.props.armyHandler} />
      );
    });

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army:
            {armyBots}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
