import React from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
    super()

    this.state = {
      botList: [],
      yourList: [],
    }
  }

  addOnClick = (bot) => {
    if(!this.state.yourList.includes(bot)){
    let newArr = [...this.state.yourList]
    newArr.push(bot)

    this.setState({yourList: newArr})
    }
  }

  removeOnClick = (sentBot) => {
    let newArr = [...this.state.yourList].filter((bot)=>{
      return bot.id !== sentBot.id
    })

    this.setState({yourList: newArr})

  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(data => {
        this.setState({botList: data})
      })
  }

  render() {
    return (
      <div>
        <YourBotArmy botList={this.state.yourList} removeOnClick={this.removeOnClick}/>
        <BotCollection botList={this.state.botList} addOnClick={this.addOnClick}/>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
