import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {

  state = {
    currentBot: {},
    showDetails: false
  }

  displayBots = () =>{
    return this.props.allBots.map((bot)=>{
      return <BotCard key={bot.id} bot={bot} addOrRemove={this.props.addOrRemove} toggleDetails={this.toggleDetails} showDetails={this.state.showDetails}/>
    })
  }

  toggleDetails = (bot) =>{
    this.setState({currentBot: bot, showDetails: !this.state.showDetails})
  }

  toggleAllBots = () =>{
    this.setState({showDetails: false})
  }

  displayBot = () =>{
    return <BotSpecs bot={this.state.currentBot} addOrRemove={this.props.addOrRemove} toggleAllBots={this.toggleAllBots} toggleDetails={this.toggleDetails} howDetails={this.state.showDetails}/>
  }

  render(){
  	if (!this.state.showDetails){
  	  return <div className="ui four column grid">
    		<div className="row">
    		  {this.displayBots()}
    		</div>
  	  </div>
  	}
    else{
      return this.displayBot()
    }
  }


};

export default BotCollection;
