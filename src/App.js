import React, { useEffect, useState } from 'react';
import './App.css';
import UserService from './services/UserService';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './components/Users';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';

function App() {

  const [users, setUsers] = useState([]);

  async function getUsers() {
    const users = await UserService.getUsers();
    if (users && users.length > 0) {
      setUsers(users);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  function deleteUser(userId) {
    const arr = users.filter(user => {
      if (user.userId !== userId) {
        return user;
      }
      return null;
    });
    setUsers([...arr]);
  }

  function saveUser(data) {
    data.userId = users[users.length - 1].userId + 1;
    setUsers([...users, data]);
  }

  function updateUser(data) {
    const arr = users.map(user => {
      if (user.userId === data.userId) {
        return data;
      } else {
        return user;
      }
    })
    setUsers(arr);
  }

  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1><Link className="navbar-brand" to="/users">User Management</Link></h1>
          </nav>
          <Switch>
            <Route path="/users/new">
              <NewUser onSaveUser={saveUser} />
            </Route>
            <Route path="/users/profile/:userId">
              <ViewUser users={users} onDeleteUser={deleteUser} />
            </Route>
            <Route path="/users/edit/:userId">
              <EditUser users={users} onUpdateUser={updateUser} />
            </Route>
            <Route path="/users">
              <Users users={users} onDeleteUser={deleteUser} />
            </Route>
            <Route path="/">
              <Users users={users} onDeleteUser={deleteUser} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
