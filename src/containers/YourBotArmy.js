import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const botcards = this.props.bots.map((bot, i) => {
    return <BotCard key={i} bot={bot[0]} clickHandler={this.props.clickHandler} parent={2} />
  
  });


    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {botcards}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
