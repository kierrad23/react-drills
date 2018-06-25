import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { array: ["b", "bl", "bli", "blis", "bliss"] };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }

  // handleArray(input){
  //
  // }

  render() {
    var array = this.state.array;
    return (
      <div className="input">
        <input onChange={e => this.handleChange(e.target.value)} />
        <div>{array.map((val, i) => <h3>{array[i]}</h3>)}</div>
      </div>
    );
  }
}

export default App;
