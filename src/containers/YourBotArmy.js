import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  botList = () => this.props.bots.map(bot => {
    return (
      <BotCard
        key = {bot.id}
        bot = {bot}
        handleClick = {this.props.handleClick}
      />
    )
  })

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.botList()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
