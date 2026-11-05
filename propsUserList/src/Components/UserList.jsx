import React from "react";
class UserList extends React.Component{
    render(){
        return(

            <div>
                {this.props.users.length > 0?(
<ul>
    {this.props.users.map((user)=>(
        <li key={user.id}>
            <strong>{user.email}</strong>//how to displ;ay both name and email check later?
        </li>
    ))}
</ul>
                ):(<p>Loading Users...</p>)}
            </div>
        )
    }
}
export default UserList