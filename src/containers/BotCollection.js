import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
		
  render(){

		const botcards = this.props.bots.map((bot, i) => <BotCard key={i} bot={bot} clickHandler={this.props.clickHandler} parent={1} />);

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
					{botcards}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
