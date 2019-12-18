import React from "react";

const TeamMember = props => {
    return (
        <div>
            {props.teamMember.map(member => (
                <div className = "member-list">
                    <h1>{member.name}</h1>
                    <h2>{member.email}</h2>
                    <h2>{member.role}</h2>

                </div>
            ))}

        </div>
    )
}
export default TeamMember;