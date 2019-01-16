import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  state = {
    botArmy: []
  }

  // handleClick = event => {
  //   this.setState({
  //     clicked: !this.state.clicked
  //   })
  // }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map(robot => {
              return <BotCard
              bot = { robot }
              // clicked = {this.state.clicked}
              // handleClick = {this.handleClick}
              />
            })}}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
