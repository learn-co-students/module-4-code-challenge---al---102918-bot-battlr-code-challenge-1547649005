import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          <BotCard bot={this.props.bot} addToArmy={this.props.addToArmy} />
        </div>
      </div>
    );
  }
}

export default BotCollection;
