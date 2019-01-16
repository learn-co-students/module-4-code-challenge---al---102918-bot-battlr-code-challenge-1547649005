import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {
  //your code here

  render(){
		console.log(this.props.showBotSpec.length);
  	return (

  	  <div className="ui four column grid">
    		<div className="row">
					{/*...and here..*/}
					{this.props.showBotSpec.length === 0 ? 
						this.props.bots.map(bot=><BotCard key={bot.id} bot={bot} showBotSpec={this.props.showBotSpec} 
							showBotSpecHandler={this.props.showBotSpecHandler} addHandler={this.props.addHandler}/>)
							:
							<BotSpecs bot={this.props.showBotSpec} showBotSpecHandler={this.props.showBotSpecHandler}
							addHandler={this.props.addHandler}/>}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
