import React, { Component } from "react";
import FriendList from "./components/FriendList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Friend List Project</p>
          <FriendList />
        </header>
      </div>
    );
  }
}

export default App;
