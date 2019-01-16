import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    console.log(this.props)
    let botList = this.props.botList.map((singleBot)=> {
      return <BotCard bot={singleBot} key={singleBot.id} clickHandler={this.props.clickHandler}/>
    })
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {botList}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
