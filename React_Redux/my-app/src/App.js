import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 }
    ]
  };
  addNinja = ninja => {
    ninja.id = Math.random();
    //create copy of ninjas array, and add new onj to it
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  };
  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <AddNinja addNinja={this.addNinja} />
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
