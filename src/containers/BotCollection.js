import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots() {
    return this.props.allBots.map(bot => (
      <BotCard
        key={bot.id}
        bot={bot}
        liked={false}
        handleClick={this.props.handleClick}
      />
    ));
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
          Collection of all bots
          {this.renderBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
