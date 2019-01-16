import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props);

    this.state = {
      bots: [],
      yourBotArmy: []
    }
    
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots").then(resp => resp.json()).then(bots => this.setState({ bots }));

  }

  render() {
    
    return (
      <div>
        <BotCollection bots={this.state.bots} clickHandler={this.clickHandler} />
        <YourBotArmy bots={this.state.yourBotArmy} clickHandler={this.clickHandler} />
      </div>
    );
  }

  clickHandler(id, src){
    if(src === 1){
      let yourBotArmy = [...this.state.yourBotArmy, this.state.bots.filter(bot => bot.id === id)]
      this.setState({ yourBotArmy })
    } else {
      const yourBotArmy = this.state.yourBotArmy.filter(bot => bot.id !== id);
      this.setState({ yourBotArmy })
    }
  }

}

export default BotsPage;
