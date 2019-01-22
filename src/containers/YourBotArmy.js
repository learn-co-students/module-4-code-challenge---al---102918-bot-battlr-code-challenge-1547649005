import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderEachSelectedBot() {
    const selectedBotsArr = this.props.selectedBots.map(bot => (
      <BotCard
        bot={bot}
        key={bot.id}
        parent="Army"
        handleUnselectBots={this.props.handleUnselectBots}
      />
    ));
    return selectedBotsArr;
  }
  render() {
    // console.log(this.props.selectedBots);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">{this.renderEachSelectedBot()}</div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
