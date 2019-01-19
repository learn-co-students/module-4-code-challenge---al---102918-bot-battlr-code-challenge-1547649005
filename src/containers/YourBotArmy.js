import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  mapListToCard (){
		
		return this.props.botList.map((bot)=> <BotCard key={bot.id} bot={bot} removeOnClick={this.props.removeOnClick} parent="army"/>)
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.mapListToCard()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
