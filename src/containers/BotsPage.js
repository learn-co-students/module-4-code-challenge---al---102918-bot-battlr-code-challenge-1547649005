import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state={
    bots:[],
    mybots:[]
  }

  addHandler=(bot) => {
    this.setState({
      mybots:[...this.state.mybots, bot]
    })
    
  }

  removeHandler=(mybot) => {
    this.setState({
      mybots:this.state.mybots.filter(bot=>bot!==mybot)
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
        <BotCollection bots={this.state.bots} addHandler={this.addHandler}/>
        
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
