import React from 'react';
import './App.css';

import { useState } from 'react';

function App() {

  const [teamList, setTeamList] = ('list');

  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');
  const [role, setRole] = useState('role');

  const handleNameChange = event => {
    setName(event.target.value);
  }

  const handleEmailChange = event => {
    setEmail(event.target.value);
  }

  const handleRoleChange = event => {
    setRole(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(role);
  }

  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input type='text' onChange={event => handleNameChange(event)} />
          <br />
        </label>
        <label>
          Email:
          <input type='text' onChange={event => handleEmailChange(event)} />
          <br />
        </label>
        <label>
          Role:
          <input type='text' onChange={event => handleRoleChange(event)} />
          <br />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default App;
