import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <form
        className="ui form segment"
        onSubmit={this.onFormSubmit}
        style={{marginTop: '10px'}}
      >
        <div className="feild">
          <label>Enter search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </div>
      </form>
    );
  }
}
