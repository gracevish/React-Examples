
import './App.css';
import React from 'react';
import List from './List';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      val:'',
      data:[1,2,3,4,5],
    }
  }
  takeVal=e=>{
    this.setState({val:e.target.value})
  }
  addItem=()=>{
    const d=this.state.data;
    d.push(this.state.val);
    this.setState({
      data:d
    })
  }
  // updateData=(e)=>{
  //   const {name,value}=e.target
  //   //console.log(e);
  //   //console.log(e.target.value);
  //   this.setState({[name]:value});
  //   console.log(this.state.username);
  //   console.log(this.state.password);
  // }
  // submitBtn=()=>{
  //   if(this.state.username==="admin"&& this.state.password==="admin"){
  //     console.log("login successfull");
  //    this.setState({output:'login successfull'})
  //   }else{
  //     console.log("login Unsuccessfull");
  //     this.setState({output:'login unsuccessfull'})
  //   }

 // }
  render(){

  return (
    <div >
      { /* <label>Enter username</label>
       <input type="text" name="username"onChange={this.updateData} />
       <label>Enter Password</label>
       <input type="text" name="password"onChange ={this.updateData} />
       <button onClick={this.submitBtn}>Login</button>
       {this.state.output} */ }
       <List data={this.state.data} takeVal={this.takeVal} addItem={this.addItem}/>
       
    
    </div>
  );
}
}

export default App;
