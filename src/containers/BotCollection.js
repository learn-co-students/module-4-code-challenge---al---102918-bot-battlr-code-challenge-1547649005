import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {

  state={
    view: "all",
    bot: {}
  }

  singleView= (viewBot)=> {
    this.setState({
      view: "single",
      bot: viewBot
    })
  }

  goBack = (viewBot) => {
    this.setState({
      view: "all"
    })
  }

  render(){
    console.log(this.props)
    let botList = this.props.botList.map((singleBot)=> {
      return <BotCard bot={singleBot} key={singleBot.id} clickHandler={this.singleView}/>
    })
    if (this.state.view === "all"){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {botList}
    		</div>
  	  </div>
  	);}
    else {
    return (
  	  <div className="ui four column grid">
    		<div className="row">
          <BotSpecs
           bot={this.state.bot}
           clickHandler={this.props.clickHandler}
           goBack={this.goBack}
            />
    		</div>
  	  </div>
  	)
    }
  }

};

export default BotCollection;
