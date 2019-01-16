import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state={
    botList: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(data => {
      this.setState({
        botList: data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage botList={this.state.botList}/>
      </div>
    );
  }
}

export default App;
