import React from "react";
// import BotCard from "../components/BotCard";
import MyBotCard from '../components/MyBotCard';

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {this.props.mybots.map(bot=><MyBotCard key={bot.id}  bot={bot} removeHandler={this.props.removeHandler}/>)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
