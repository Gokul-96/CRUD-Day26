//Update


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({ users,setUsers }) => {
  const userId = 1; // Replace with the actual user ID
  
  const user = users.find((user) => user.id === userId);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);

  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      name,
      email,
      age,
    };

    // Update the user in the array
    const updatedUsers = users.map((u) => (u.id === userId ? updatedUser : u));
    setUsers(updatedUsers); // update user sate
    // Navigate back to the user's profile
    navigate(`/profile/${userId}`);
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleUpdateProfile}>
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
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditProfile;
