import React from 'react';
import { useState } from 'react';
import './App.css';

import Form from './components/Form';
import Card from './components/Card';

function App() {
  const [teamMember, setTeamMember] = useState({});
  const [teamList, setTeamList] = useState([{name: 'Quinton', email: 'QEmail', role: 'Dev'}, {name: 'Connor', email: 'CEmail', role: 'Dev'}, {name: 'Bob', email: 'BEmail', role: 'Designer'}]);
  console.log(teamList);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

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
    setTeamMember({name, email, role});
    setTeamList([...teamList, teamMember]);
    setName('');
    setEmail('');
    setRole('');
    console.log(teamList);
  }

  return (
    <div>
      <Form
        teamMember={teamMember}
        teamList={teamList}
        name={name}
        email={email}
        role={role}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handleRoleChange={handleRoleChange}
        handleSubmit={handleSubmit}
      />
      <div>
        <Card
          teamList={teamList}
          name={name}
          email={email}
          role={role}
        />
      </div>
    </div>
  )
}

export default App;
