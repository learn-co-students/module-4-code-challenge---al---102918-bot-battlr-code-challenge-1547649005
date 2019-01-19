import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	
	mapListToCard (){
		
		return this.props.botList.map((bot)=> <BotCard key={bot.id} bot={bot} addOnClick={this.props.addOnClick}/>)
	}


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				Collection of all bots
    		  {this.mapListToCard()}
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
