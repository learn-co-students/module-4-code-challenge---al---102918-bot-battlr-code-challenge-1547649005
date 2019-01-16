import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

 state={
   botList: [],
   yourBots: []
 }


 componentDidMount(){
   fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
   .then(resp => resp.json())
   .then(data => {
     console.log(data)
     this.setState({
       botList: data
     })
   })
 }

 addToYourBots = (bot)=> {
   let exist = false
   this.state.yourBots.map((yourBot) =>{
     if (yourBot.id === bot.id) {
       exist =true
     }
   })
   console.log(exist)
   if (!exist){
   let newArr = [...this.state.yourBots, bot]
   this.setState({
     yourBots: newArr
   })
 }
 }


  render() {
    console.log(this.state.botList)
    return (
      <div>
        <BotCollection
          botList={this.state.botList}
          clickHandler={this.addToYourBots}
          />
        <YourBotArmy
          yourBots={this.state.yourBots}
          />
      </div>
    );
  }

}

export default BotsPage;
