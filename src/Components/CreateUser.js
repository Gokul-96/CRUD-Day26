//create
import React , {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'


function CreateUser({users}) {

  //To store value enter by user in input fields.
  //The useState hook returns an array with the current state value and a function to update the state value.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  //We use the useNavigate hook to get access to the history object. The history object allows us to manipulate the browser history, which includes navigation functionalities like push, goBack

const navigate = useNavigate();

const handleCreateUser = (e) => {
  e.preventDefault();


    // Create a new user object
    const newUser = {
      //users.length + 1 ......In total length add 1 we get new user id 
      id: users.length + 1,
      name,
      email,
      age,
    };   // Add the new user to the users array
    users.push(newUser);
    // Navigate back to the dashboard
    navigate('/'); // Redirect to the dashboard
  };

  return (
    //The onChange={(e) => setName(e.target.value)} listens for changes in the input value.
    // When the user types, the setName function is called with the new value from the input.
    <div>
        <h1>CreateUser</h1>
        <form onSubmit={handleCreateUser}>
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
        <button type="submit">Create User</button>
      </form>
        <ul>
            {
                users.map(user=>
                    <li key = {user.id}><Link to = {`/users/${user.id}`}>{user.name}</Link></li>)
            }
        </ul>
    </div>
  )
}

export default CreateUser;