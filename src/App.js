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
    console.log(userId);
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
                <NewUser />
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
