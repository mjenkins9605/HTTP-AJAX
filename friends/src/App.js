import React, { Component } from "react";
import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";
import axios from "axios";
import { Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  addFriend = data => {
    axios
      .post("http://localhost:5000/friends", data)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FriendList
            friends={this.state.friends}
            deleteFriend={this.deleteFriend}
          />
          {/* <Link to="/form"> Inputs </Link> */}
          <Route
            path="/form"
            render={() => <FriendForm addFriend={this.addFriend} />}
          />
        </header>
      </div>
    );
  }
}

export default App;
