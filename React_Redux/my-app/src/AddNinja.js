import React, { Component } from "react";

class AppNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };
  handleChange = e => {
    this.setState({
      //value is the text of the input field
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //function as a prop
    this.props.addNinja(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange} />
          <br />
          <label htmlFor="name">Age: </label>
          <input type="text" id="age" onChange={this.handleChange} />
          <br />
          <label htmlFor="name">Belt: </label>
          <input type="text" id="belt" onChange={this.handleChange} />
          <br />
          <button>Submit</button>
        </form>
        <br />
      </div>
    );
  }
}

export default AppNinja;
