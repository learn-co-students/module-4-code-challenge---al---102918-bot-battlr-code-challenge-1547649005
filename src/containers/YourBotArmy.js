import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  render() {
    let botList = this.props.bots.map((bot, i) => (
      <BotCard
        parent={this.props.parent}
        key={i}
        bot={bot}
        renderBotInArmy={this.props.renderBotInArmy}
      />
    ));
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">{botList}</div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
