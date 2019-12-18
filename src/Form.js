import React, {useState} from 'react';

const Form = props => {
    console.log(props);
    const [teamForm, setTeamForm] = useState({name: "", email: "", role: ""});

    const handleChanges = e => {
        setTeamForm({
            ...teamForm,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addTeamMember(teamForm);
        setTeamForm({name: "", email: "", role: ""});

    };




    return(
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">Name</label>
            <input
            id = "name"
            type = "text"
            placeholder = "name"
            onChange = {handleChanges}
            name = "name"
            value = {teamForm.name} 
            />
            <label htmlFor = "email">Email</label>
            <input
            id = "email"
            type = "text"
            placeholder = "email"
            onChange = {handleChanges}
            name = "email"
            value = {teamForm.email} 
            />
            <label htmlFor = "role">Role</label>
            <input
            id = "role"
            type = "text"
            placeholder = "role"
            onChange = {handleChanges}
            name = "role"
            value = {teamForm.role} 
            />
            <button type="submit">Add Team Member</button>
        </form>
    )
}
export default Form;