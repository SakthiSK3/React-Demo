import React,{Component} from 'react';

class ApiCall extends Component{

constructor(){
super()
this.state={
    users:[]
}
}
componentDidMount(){

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(response =>{
        console.log(response);
        this.setState({ users:response})
    })
    
}

render(){
    return(
        <div>
             <center><h1> users </h1></center>

             {this.state.users.map(user => (

                 <div class="card">
                  <div class="class-body">
                     <h5 class="card-title">{user.id}</h5>
                     <h4 class="card-title">{user.name}</h4>
                     <h5 class="card-title">{user.username}</h5>
                     <h4 class="card-title">{user.email}</h4>
                    </div>  

                </div>   
             ))}
        </div>

    )
}

}

export default ApiCall;