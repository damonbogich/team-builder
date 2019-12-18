import React, {useState} from 'react';
import logo from './logo.svg';
import Form from "./Form";
import TeamMember from "./TeamMember";
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([{
      name: "Greg",
      email: "greg@yahoo.com",
      role: "Father"
  }]);

  const addTeamMember = member => {
    const newTeamMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newTeamMember])
  }

  return (
    <div className="App">
      <h1>THE SQUAD!!!!!!!</h1>
      <Form addTeamMember = {addTeamMember} />
      <TeamMember teamMember = {teamMember} />
    </div>
  );
}

export default App;
