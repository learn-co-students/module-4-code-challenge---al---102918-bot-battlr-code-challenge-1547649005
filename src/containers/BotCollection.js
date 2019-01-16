import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.botList.map(bot=>(
            <div>
            <BotCard
              key={bot.id}
              bot={bot}
              />
            <BotSpecs
              key={bot.id}
              bot={bot}
              addToArmy={this.props.addToArmy}/>
            </div>
          ))}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
// {this.state.botCardClicked ? <BotSpecs key={bot.id} bot={bot}/> : null}
