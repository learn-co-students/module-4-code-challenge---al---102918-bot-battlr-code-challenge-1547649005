import React from "react";
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import BotSpecs from '../components/BotSpecs';
import ClassFilter from '../components/ClassFilter';

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(){
    super()

    this.state = {
      botList: [],
      yourList: [],
      showSpec: false,
      currentBot: {},
      filteredKey: '',
    }
  }

  handleAddButton = () => {
    if(!this.state.yourList.includes(this.state.currentBot)){
      let newArr = [...this.state.yourList]
      newArr.push(this.state.currentBot)
  
      this.setState({yourList: newArr})
      }
  }

  handleGoBack = () => {
    this.setState({showSpec : !this.state.showSpec})
  }

  addOnClick = (bot) => {
    this.setState({showSpec: !this.state.showSpec})
    this.setState({currentBot: bot})
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

  handleSubmit = (e, value) =>{
    e.preventDefault()
    this.setState({filteredKey: value})
  }

  render() {

    let filteredArray = this.state.botList

    if(this.state.filteredKey !== ''){
      console.log("object")
      filteredArray = filteredArray.filter((bot)=>{
        //debugger
        return bot.bot_class.toLowerCase() === this.state.filteredKey.toLowerCase()
      })
    }

    console.log(filteredArray.length)

    const showSpecs = {
      display: (this.state.showSpec ? 'block' : 'none')
    }

    const showColl = {
      display: (this.state.showSpec ? 'none' : 'block')
    }

    return (
      <div>
        <ClassFilter handleSubmit={this.handleSubmit}/>
        <YourBotArmy botList={this.state.yourList} removeOnClick={this.removeOnClick}/>
        <div style={showColl}>
          <BotCollection botList={filteredArray} addOnClick={this.addOnClick}/>
        </div>
        <div style={showSpecs}>
          <BotSpecs bot={this.state.currentBot} handleAddButton={this.handleAddButton} handleGoBack={this.handleGoBack}/>
        </div>
      </div>
    );
  }

}

export default BotsPage;
