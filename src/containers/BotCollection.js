import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  renderEachBot() {
    let botsArr = this.props.bots.map(bot => (
      <BotCard
        bot={bot}
        key={bot.id}
        handleSelectedBots={this.props.handleSelectedBots}
      />
    ));
    return botsArr;
  }
  render() {
    // console.log(this.props.handleSelectedBots);
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.renderEachBot()}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
