import React, { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "outon.x@gmail.com",
      copied: false
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
