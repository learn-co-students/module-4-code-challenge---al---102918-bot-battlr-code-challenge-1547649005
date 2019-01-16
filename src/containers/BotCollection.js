import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
  //your code here

  state={
    clicked: false
  }

  seeSelectedBot = (bot) => {
    console.log(bot)
  }

  backButton = () =>{
    let click = this.state.clicked
    console.log(click)
    this.setState({
      clicked: !click
    })
  }

  render(){

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.botList.map(bot=>(
            <div>
            <BotCard
              key={bot.id}
              bot={bot}
              seeSelectedBot={this.seeSelectedBot}
              />
            <BotSpecs
              key={bot.id}
              bot={bot}
              addToArmy={this.props.addToArmy}
              backButton={this.backButton}
              style={{display: this.state.clicked ? 'block' : 'none'}}
              />
            </div>
          ))}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
