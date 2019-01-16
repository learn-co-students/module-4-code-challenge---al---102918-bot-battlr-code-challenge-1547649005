import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state= {
    botList: [],
    myArmy: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res=>res.json())
      .then(data=>{
        this.setState({
          botList: data
        })
      })
  }

  addToArmy = (bot) => {
    let newArmy = [...this.state.myArmy, bot]
    if (this.state.myArmy.includes(bot)){
      null
    } else{
      this.setState({
        myArmy: newArmy
      })
    }
  }

  removeFromArmy = (bot) => {
    let army = [...this.state.myArmy]
    if (army.includes(bot)){
      let botInArr = army.indexOf(bot)
      let removedBot = botInArr != -1 ? army.splice(botInArr, 1) : null
      this.setState({
        myArmy: army
      })
    } else {null}
  }



  render() {
    return (
      <div>
        <BotCollection
          botList={this.state.botList}
          addToArmy={this.addToArmy}
          />
        <YourBotArmy
          botList={this.state.myArmy}
          removeFromArmy={this.removeFromArmy}
          />
      </div>
    );
  }

}

export default BotsPage;
