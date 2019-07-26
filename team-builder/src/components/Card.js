import React from 'react';
import { useState } from 'react';

const Card = ({ name, email, role, teamList }) => {
  const [testName, setTestName] = useState(name);
  const [testEmail, setTestEmail] = useState(email);
  const [testRole, setTestRole] = useState(role);
  const [testList, setTestList] = useState(teamList);

  return (
    <div>
      {name}
      <div>
        {email}
        <div>
          {role}
          <div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Card;
