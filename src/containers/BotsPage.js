import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.bots.map(bot => (
          <BotCollection
            key={bot.id}
            bot={bot}
            addToArmy={this.props.addToArmy}
          />
        ))}
      </div>
    );
  }
}

export default BotsPage;
