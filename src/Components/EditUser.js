import React, { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

const EditUser = ({ users }) => {
  const { id: userId } = useParams();
  const navigate = useNavigate();

  // Find the user with the matching id
  const user = users.find((user) => user.id === parseInt(userId));

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name,
      email,
      age,
    };

    // Update the user in the array
    const updatedUsers = users.map((u) => (u.id === parseInt(userId) ? updatedUser : u));
    // Update the users array using a state management solution in a real app

    users = updatedUsers;

    // Navigate back to the user's profile
    navigate(`/profile/${userId}`);
    
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleUpdateUser}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;