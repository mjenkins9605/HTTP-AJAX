import React from "react";
import axios from "axios";

class FriendList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.friends.map(friend => (
          <div key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendList;
