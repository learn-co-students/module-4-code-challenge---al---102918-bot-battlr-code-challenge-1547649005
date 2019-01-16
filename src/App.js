import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      army: []
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://bot-battler-api.herokuapp.com/api/v1/bots"
    );
    const data = await response.json();
    this.setState({
      bots: data,
      army: []
    });
  }

  addToArmy2 = botSelected => {
    this.state.bots.filter(bot => {
      if (bot.id === botSelected.id) {
        this.setState({
          army: bot
        });
      }
    });
  };

  addToArmy = botSelected => {
    let newBots = [...this.state.bots];
    let newArmy = [...this.state.army];
    newBots = this.state.bots.filter(bot => {
      if (bot.id === botSelected.id) {
        newArmy.push(bot);
      }
      return bot.id !== botSelected;
    });
    this.setState({
      bots: newBots,
      army: newArmy
    });
  };

  // filteredList = botSelected => {
  //   return this.state.bots.filter(bot => bot.id !== botSelected.id);
  // };

  render() {
    console.log(this.state.bots);
    return (
      <div className="App">
        <BotsPage
          bots={this.state.bots}
          army={this.state.army}
          addToArmy={this.addToArmy}
        />
      </div>
    );
  }
}

export default App;
