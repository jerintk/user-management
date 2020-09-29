import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function ViewUser(props) {

  const history = useHistory();
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    props.users.filter(item => {
      if (item.userId === parseInt(params.userId)) {
        setUser(item);
        return item;
      }
      return null;
    });
  }, [props.users, params.userId]);

  function goBack() {
    history.push('/users');
  }
  
  return (
    <div className="container">
      <div className="card my-3">
        <h5 className="card-header">User Details
        <button className="btn btn-primary float-right mr-3" onClick={goBack}>Back to Users</button>
        </h5>
        <div className="card-body">
          <h5 className="card-title">Name: {user.name}</h5>
          <p className="card-text">Age: {user.age}</p>
          <p className="card-text">Sex: {user.sex}</p>
          <p className="card-text">City: {user.city}</p>
          <p className="card-text">Country: {user.country}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;