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
            <select onChange= {this.props.changeHandler}>
              <option value ='' >Filter by Class </option>
              <option value = 'support'>Support</option>
              <option value = 'assault'>Assault</option>
              <option value = 'defender'>Defender</option>
            </select>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
