import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    console.log(this.props);
    let botList = this.props.bots.map((bot, i) => (
      <BotCard key={i} bot={bot} />
    ));
    return (
      <div className="ui four column grid">
        <div className="row">{botList}</div>
      </div>
    );
  }
}

export default BotCollection;
