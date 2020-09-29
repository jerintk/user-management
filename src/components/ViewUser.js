import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function ViewUser(props) {

  const params = useParams();
  const history = useHistory();
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


  function deleteUser(userId) {
    // props.onDeleteUser(userId);
  }

  function editUser() {
    history.push('/users/edit/' + params.userId);
  }
  
  return (
    <div>
      <div className="card">
        <h5 className="card-header">User Details
        <button className="btn btn-danger float-right ml-3" onClick={deleteUser(user.userId)}>Delete</button>
        <button className="btn btn-primary float-right" onClick={editUser}>Edit</button>
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