import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  displayBots = () =>{
    return this.props.allBots.map((bot)=>{
      return <BotCard key={bot.id} bot={bot} addOrRemove={this.props.addOrRemove}/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.displayBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
