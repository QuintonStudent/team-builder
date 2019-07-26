import React from 'react';

const Form = ({ teamMember, teamList, name, email, role, handleNameChange, handleEmailChange, handleRoleChange, handleSubmit }) => {
  return (
    <div className="App">
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input type='text' value={name} placeholder={'name'} onChange={event => handleNameChange(event)} />
          <br />
        </label>
        <label>
          Email:
          <input type='text' value={email} placeholder={'email'} onChange={event => handleEmailChange(event)} />
          <br />
        </label>
        <label>
          Role:
          <input type='text' value={role} placeholder={'role'} onChange={event => handleRoleChange(event)} />
          <br />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Form;
