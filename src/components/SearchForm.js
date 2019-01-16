import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    value: ""
  };

  changeHandler = e => {
    this.setState({
      value: e.target.value
    });
    this.props.searchHandler(e.target.value);
  };

  render() {
    return (
      <input
        className="search-form"
        type="text"
        value={this.state.value}
        onChange={this.changeHandler}
        placeholder="Search Bots"
      />
    );
  }
}

export default SearchForm;
