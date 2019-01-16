import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  pushingSingleBotsToCard = () => {
    let newArr = this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} addingBotsToArmy={this.props.addingBotsToArmy} />)
    return newArr
  }

  render(){
    //console.log(this.props.bots.map(bot => bot.name));
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.pushingSingleBotsToCard()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
