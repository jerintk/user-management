import React from 'react';

function NewUser() {

  function saveUsers() {
    
  }

  return (
    <div>
      <h2>New User</h2>
      <div className="form-sect">
        <div className="btn-sect">
          <button className="btn btn-primary" onClick={saveUsers}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default NewUser;