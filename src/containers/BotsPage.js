import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state={
    bots:[],
    mybots:[],
    botSpec:[]
  }

  addHandler=(bot) => {
    // console.log(bot);
    if(!this.state.mybots.includes(bot)){
      this.setState({
        mybots:[...this.state.mybots, bot]
      })
    }
    
  }
  
  showBotSpecHandler=(bot) => {
    console.log('inside show', bot);
    this.setState({
      botSpec:bot
    })
  }

  removeHandler=(mybot) => {
    const myNewBots=[...this.state.mybots]
    this.setState({
      mybots:myNewBots.filter(bot=>bot!==mybot)
    })
    
  }
  //start here with your code for step one

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res=>res.json())
    .then(bots=>this.setState({bots}))
  }

  render() {
    return (
      <div>
        <YourBotArmy mybots={this.state.mybots} removeHandler={this.removeHandler}/>
        <BotCollection bots={this.state.bots} addHandler={this.addHandler} 
        showBotSpec={this.state.botSpec} showBotSpecHandler={this.showBotSpecHandler}/>
        
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
