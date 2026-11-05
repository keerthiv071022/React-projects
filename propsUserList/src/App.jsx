import React from "react";
import UserList from "./Components/UserList";
class App extends React.PureComponent{
 constructor(props){
  super()
  this.state={
    users:[]
  }
 }
componentDidMount(){
  fetch("/Users.json")
  .then((response)=>response.json())
  .then((data)=>this.setState({users:data}))
  .catch((error)=>console.error("error fetching Users : ",error));

  
}
render(){
  return(
    <>
    <div>
      <h1>Users List</h1>
      <UserList users={this.state.users}/>

    </div>
    
    
    
    </>
  )
}
}
export default App