import React from "react";

const UserList = ({ users, handleDelete }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <div>
            <p>
              {user.first_name} {user.last_name}
            </p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
