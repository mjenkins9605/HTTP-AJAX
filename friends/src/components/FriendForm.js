import React from "react";
import axios from "axios";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: "",
      }
    };
  }

  changeHandler = event => {
    this.setState({
    //   ...this.state.newFriends,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addFriend(this.state);
  };

  putHandler = event => {
    event.preventdefault();
    axios.put("http://localhost:5000/friends/${id}", this.state.item);
  };

  render() {
    return (
      <div>
        <h2>Add New Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="Name"
            value={this.state.name}
          />
          <div className="baseline" />

          <input
            type="text"
            name="age"
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.age}
          />
          <div className="baseline" />

          <input
            type="text"
            name="email"
            onChange={this.changeHandler}
            placeholder="Email"
            value={this.state.email}
          />
          <div className="baseline" />
          <button type="submit">Add New Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
