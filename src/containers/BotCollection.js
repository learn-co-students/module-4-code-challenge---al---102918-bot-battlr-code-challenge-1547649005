import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  state= {
    clickedBot: []
  }

  handleClick = event => {
    console.log('I work!')
    this.setState({
      clickedBot: event.target.value
    })
  }


  render(){
    console.log(this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(robot => {
            return <BotCard
            bot = { robot }
            handleClick = {this.handleClick} />
          })}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
