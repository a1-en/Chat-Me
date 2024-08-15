import React from "react";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      <p>Users:</p>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
