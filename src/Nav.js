import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './Users';

function Nav() {
  return (
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
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    </nav>
  )
}

export default Nav;