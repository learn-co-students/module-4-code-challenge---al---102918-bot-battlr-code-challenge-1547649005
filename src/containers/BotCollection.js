import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.botList.map(bot => (
						<BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler}/>
					))}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
