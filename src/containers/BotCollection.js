import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  singleBot = () => this.props.bots.map(bot => {
    return <BotCard bot={bot} key={bot.id} addBotToArmy={this.props.addBotToArmy} />
  })

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.singleBot()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
