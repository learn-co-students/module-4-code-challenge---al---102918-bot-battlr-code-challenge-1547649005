import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

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
      <div className="ui four column grid">
        <div className="row">{botList}</div>
      </div>
    );
  }
}

export default BotCollection;
