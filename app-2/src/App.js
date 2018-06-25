import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataArray: ["apples", "cheese", "hamburger", "pickles", "watermelon"]
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    var dataArray = this.state.dataArray;
    return (
      <div className="input">
        <div>{dataArray.map((val, i, arr) => <h2>{dataArray[i]}</h2>)}</div>
      </div>
    );
  }
}

export default App;
