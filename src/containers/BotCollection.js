import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
          {/*console.log(this.props.bots.map(bot=> bot.bot_class))*/}


          {
            this.props.bots.map(bot =>
              <BotCard key={bot.id} name={bot.name} health={bot.health} damage={bot.damage} armor={bot.armor} bot_class={bot.bot_class} catchphrase={bot.catchphrase} image={bot.avatar_url} />
            )
          }





    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
