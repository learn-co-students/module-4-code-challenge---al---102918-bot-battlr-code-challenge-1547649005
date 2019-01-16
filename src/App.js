import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bots: []
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://bot-battler-api.herokuapp.com/api/v1/bots"
    );
    const data = await response.json();
    this.setState({
      bots: data
    });
  }
  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} />
      </div>
    );
  }
}

export default App;
