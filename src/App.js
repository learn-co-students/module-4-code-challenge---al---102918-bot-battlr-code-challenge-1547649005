import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
import SearchForm from "./components/SearchForm";

class App extends Component {
  state = {
    botList: [],
    filteredBotList: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => {
        this.setState({
          botList: data,
          filteredBotList: data
        });
      });
  }

  searchHandler = searchTerm => {
    let filteredBotListClone = [];
    let BotListClone = [...this.state.botList].filter(bot => {
      if (bot.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        filteredBotListClone.push(bot);
      }
    });

    this.setState({
      filteredBotList: filteredBotListClone
    })
  };

  render() {
    return (
      <div className="App">
        <SearchForm searchHandler={this.searchHandler} />
        <BotsPage botList={this.state.filteredBotList} />
      </div>
    );
  }
}

export default App;
