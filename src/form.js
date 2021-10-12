import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handlerUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handlerPassword = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  handlerSubmit = (event) => {
    alert(`Hii ${this.state.username}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handlerUsername}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlerPassword}
          />
        </div>
        <button
          style={{ backgroundColor: "green", fontWeight: "bold" }}
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
