import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          {this.props.bots.map(bot => (
            <BotCollection
              key={bot.id}
              bot={bot}
              addToArmy={this.props.addToArmy}
            />
          ))}
        </div>
        <YourBotArmy army={this.props.army} />
      </div>
    );
  }
}

export default BotsPage;
