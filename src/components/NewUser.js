import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewUser(props) {

  const history = useHistory();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    props.onSaveUser({ userId: null, name, age, sex, city, country });
    history.push('/users');
  }

  return (
    <div className="container">
      <div className="my-3 card">
        <h5 className="card-header">New User</h5>
        <div className="card-body">
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" className="form-control" id="age" placeholder="Enter age" onChange={e => setAge(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="sex">Sex</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="sex" id="exampleRadios1" value="Male" onChange={e => setSex(e.target.value)} />
                <label className="form-check-label" htmlFor="exampleRadios1">Male</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="sex" id="exampleRadios2" value="Female" onChange={e => setSex(e.target.value)} />
                <label className="form-check-label" htmlFor="exampleRadios2">Female</label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" placeholder="Enter city" onChange={e => setCity(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" className="form-control" id="country" placeholder="Enter country" onChange={e => setCountry(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUser;