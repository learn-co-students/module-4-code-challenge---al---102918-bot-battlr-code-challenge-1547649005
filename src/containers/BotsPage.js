import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      army: []
    };
  }

  addToArmy = botSelected => {
    this.props.bots.forEach(bot => {
      if (bot.id === botSelected.id) {
        this.setState({
          army: bot
        });
      }
    });
  };

  render() {
    console.log(this.state.army);
    return (
      <div>
        {this.props.bots.map(bot => (
          <BotCollection key={bot.id} bot={bot} addToArmy={this.addToArmy} />
        ))}
      </div>
    );
  }
}

export default BotsPage;
