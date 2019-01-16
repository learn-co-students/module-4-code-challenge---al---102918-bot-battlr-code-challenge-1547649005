import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  hidden = {
    display: 'none'
  }

  shown = {
    display: 'block'
  }

  botList = () => this.props.bots.map(bot => {
    return (
      <BotCard
        key = {bot.id}
        bot = {bot}
        handleClick = {this.props.handleClick}
        display = {this.props.display}
      />
    )
  })

  render(){
  	return (
  	  <div style = {this.props.display ? this.shown : this.hidden}className="ui four column grid botCollection">
    		<div className="row">
          {this.botList()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
