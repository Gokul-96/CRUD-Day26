import React, { useState }  from 'react';
import { Link,BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
import EditProfile from './Components/EditProfile';
import UserProfile from './Components/UserProfile'



function App() {
  const [users,setUsers] = useState([
    { id:1, name: 'Gokul', email: 'gokulakrishnan@gmail.com', age: 27 },
    { id:2, name: 'kanmani', email: 'kanmani@gmail.com', age: 25 },
    { id:3, name: 'Tara', email: 'tara@gmail.com', age: 28 },
  ]);

  const padding ={
    padding:15
  }


  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers); //userstate update
  };
  return (
    <div>
    <Router>
      <div>
        <Link to='/' style={padding}>Dashboard</Link>
        <Link to='/create-user' style={padding}>CreateUser</Link>

        <Link to={`/edit-profile/${users.id} `} style={padding}>EditProfile</Link>
      </div>
   <Routes>
        <Route path='/' element={<Dashboard users={users}/>} />
        <Route path='/create-user'  element={<CreateUser users={users}/>} />
        <Route path='/create-user/:id' element={<EditUser users={users}/>} />
        <Route path='/profile/:id'  element={<UserProfile users={users} onDelete={deleteUser}/>} />
        <Route path='/edit-profile/:id' element={<EditProfile users={users} setUsers={setUsers}/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;