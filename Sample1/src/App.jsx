import React from "react";

class App extends React.PureComponent{
 constructor(props){
  super()
  this.state={
    name:'keerthi',
    count:0
  }
 }
 changeName=()=>{
  this.setState({
    name:'Ashtami',
    
  })
 }
 //life-cycle methods
//  componentDidMount(){
//   console.log('Component mounted successfully');
  
//  }
componentDidUpdate(prevProps,prevState){
  console.log(`name changes from ${prevState.name} to ${this.state.name}`);
  
}



//  increaseCount=()=>{
//   this.setState({
//     count:this.state.count+1
//   })
//  }
 render(){
 console.log('Component rendered');
 
  return(
    <>
    <p>Hi my name is {this.state.name}</p>
    <button onClick={this.changeName}>Change NAme</button>
    {/* <button onClick={this.increaseCount}>Count is {this.state.count}</button> */}

    </>
  )
 }      
}
  

export default App



