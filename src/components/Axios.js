import React,{Component} from 'react';
import axios from 'axios';
class ApiCall extends Component{

constructor(){
super()
this.state={
    users:[]
}
}
componentDidMount(){

    axios ("https://jsonplaceholder.typicode.com/users")
    
    .then(res =>{
        console.log(res);
        this.setState({ users:res.data})
    });
    
}

render(){
    return(
        <div>
             <center><h1> users </h1></center>

             {this.state.users.map( user => ( 
    <div class="card">
    <div class="class-body">
       <h5 class="card-title">{user.id}</h5>
       <h4 class="card-title">{user.name}</h4>
       
      </div>
</div>
              ) )}
             
        </div>

    )
}

}

export default ApiCall;