//click in the dashboard then showing user details here
//searches the users array to find the corresponding user.
//useParams hook from react-router-dom to access the parameters passed in the URL.
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserProfile({ users, onDelete }) {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  const navigate = useNavigate(); // Initialize the navigate function

  const handleDelete = () => {
    onDelete(user.id); // Call the onDelete function from the parent component
    navigate('/'); // Navigate to the dashboard after deletion
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
}

export default UserProfile;