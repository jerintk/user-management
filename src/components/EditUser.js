import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function EditUser(props) {

  const params = useParams();
  const history = useHistory();

  const [userId, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    function setUser() {
      let user = props.users.filter(item => {
        if (item.userId === parseInt(params.userId)) {
          return item;
        }
        return null;
      });
      if (user.length > 0) {
        user = user[0];
        setId(user.userId);
        setName(user.name);
        setAge(user.age);
        setSex(user.sex);
        setCity(user.city);
        setCountry(user.country);
      }
    }
    setUser();
  }, [props.users, params]);

  const submitForm = (e) => {
    e.preventDefault();
    props.onUpdateUser({ userId, name, age, sex, city, country });
    history.push('/users');
  }

  return (
    <div>
      <h2>Edit User</h2>
      <div className="form-sect">
        <form onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" id="age" placeholder="Enter age" value={age} onChange={e => setAge(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="sex">Sex</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sex" id="exampleRadios1" checked={sex === 'Male'} value="Male" onChange={e => setSex(e.target.value)} />
              <label className="form-check-label" htmlFor="exampleRadios1">Male</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sex" id="exampleRadios2" checked={sex === 'Female'} value="Female" onChange={e => setSex(e.target.value)} />
              <label className="form-check-label" htmlFor="exampleRadios2">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control" id="city" placeholder="Enter city" value={city} onChange={e => setCity(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" className="form-control" id="country" placeholder="Enter country" value={country} onChange={e => setCountry(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;