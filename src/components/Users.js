import React,{ Component } from 'react';

class Users extends  Component {
constructor(props){
    super(props)
    this.state={
        user:[
            {name : "sakthi",age:20},
            {name : "vijay",age:30},
            {name : "aswin ",age:40}
        ],
        title:"userlist"
    };

    
     
    
    
}
  render() {
    return(

    <div>
        <h1>{this.state.title}</h1>
   
<h4>
    name:{this.state.user[0].name} || Age:{this.state.user[0].age} <br/>
    name:{this.state.user[1].name} || Age:{this.state.user[1].age} <br/>
    name:{this.state.user[2].name} || Age:{this.state.user[2].age} <br/>

</h4>



    </div>

    );
    }
   }

export default Users;