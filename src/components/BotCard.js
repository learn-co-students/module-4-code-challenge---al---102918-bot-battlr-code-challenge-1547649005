import React from "react";

class BotCard extends React.Component {
  state = {
    clicked: false
  };

  changeClickStatus = () => {
    this.setState({
      clicked: !this.state.clicked
    });
    this.props.renderBotInArmy(this);
  };

  render() {
    console.log(this.props.parent);
    const { bot } = this.props;

    let botType;

    switch (bot.bot_class) {
      case "Assault":
        botType = <i className="icon military" />;
        break;
      case "Defender":
        botType = <i className="icon shield" />;
        break;
      case "Support":
        botType = <i className="icon ambulance" />;
        break;
      default:
        botType = <div />;
    }

    return (
      <div onClick={this.changeClickStatus} className="ui column">
        <div
          className="ui card"
          key={bot.id}
          onClick={() => console.log("add code to connect event listener")}
        >
          <div className="image">
            <img alt="oh no!" src={bot.avatar_url} />
          </div>
          <div className="content">
            <div className="header">
              {bot.name} {botType}
            </div>

            <div className="meta text-wrap">
              <small>{bot.catchphrase}</small>
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat" />
              {bot.health}
            </span>

            <span>
              <i className="icon lightning" />
              {bot.damage}
            </span>
            <span>
              <i className="icon shield" />
              {bot.armor}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default BotCard;
