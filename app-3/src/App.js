import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: ["b", "bl", "bli", "blis", "bliss"],
      empty: ""
    };
  }
  handleChange(filter) {
    this.setState({ empty: filter });
  }

  render() {
    let displayItems = this.state.array
      .filter((element, index) => {
        return element.includes(this.state.empty);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="input">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {displayItems}
      </div>
    );
  }
}

export default App;
