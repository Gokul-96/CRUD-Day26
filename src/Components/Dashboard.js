//Read

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/profile/${user.id}`}>
              {user.name} ({user.age})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

