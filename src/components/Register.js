import React,{Component} from 'react';
import logo from './logo.png';
import './Style.css';

class First extends Component{
constructor(props){
super(props);
this.state={
   username:'',
   Password:'',
   name:'',
   Email:'',
   Dob:'',
   Phonenumber:''
  }
}
handleUsernameChange = (event) =>{

  this.setState({
    username: event.target.value
  })
}
handlePasswordChange = (event) =>{

  this.setState({
    Password: event.target.value
  })
}
handleNameChange = (event) =>{

  this.setState({
    Name: event.target.value
  })
}
handleEmailChange = (event) =>{

  this.setState({
    Email: event.target.value
  })
}
handleDobChange = (event) =>{

  this.setState({
    Dob: event.target.value
  })
}
handlePhonenumberChange = (event) =>{

  this.setState({
    Phonenumber: event.target.value
  })
}
handleSubmit = event =>{

  event.PreventDefault();
}
render(){
  
  return (
<div className="container">
<div className="card">
  <img src={logo}  alt="A logo"></img >  <br/> <br/>
  <center>
<form onSubmit={this.handleSubmit}>
<div>
<input type="text" value={this.state.value}  placeholder="Username " onChange={this.handleUsernameChange}></input> <br/> <br/>
<input type="text" value={this.state.value}  placeholder="Password " onChange={this.handlePasswordChange}></input> <br/> <br/>
<input type="text" value={this.state.value}  placeholder="Name " onChange={this.handleNameChange}></input> <br/> <br/>
<input type="Email" value={this.state.value}  placeholder="Email " onChange={this.handleEmailChange}></input> <br/> <br/>
<input type="text"  value={this.state.value}  placeholder="DOB " onChange={this.handleDobChange}></input> <br/> <br/>
<input type="phonenumber" pattern='0-9'value={this.state.value}  placeholder="Phonenumber " onChange={this.handlePhonenumberChange}></input> <br/> <br/>
<input type="checkbox" />   Agree tterms of conditiom  <br/> <br/>
<button type=" submit"  >Register</button>
</div>

</form>
</center>
</div>
</div>
  )

} 
}
export default First;