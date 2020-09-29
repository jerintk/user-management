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
    <div className="container-fluid App">
      <header className="header">
        <h1>User Management</h1>
      </header>
      <nav>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/users/new">
                <NewUser onSaveUser={saveUser} />
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
      </nav>
    </div>
  );
}

export default App;
