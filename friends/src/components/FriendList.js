import React from "react";

const FriendList = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <div key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={() => props.deleteFriend(friend.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FriendList;
