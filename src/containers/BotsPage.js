import React from "react";
import BotCollection from './BotCollection.js';

class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    bots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(bots => this.setState({bots}))
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        {/*console.log(this.state.bots.map(bot => bot.name))*/}

        <BotCollection bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
