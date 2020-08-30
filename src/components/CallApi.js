import React,{Component} from 'react';
import axios from 'axios';
class CallApi extends Component {
  constructor(props){
    super(props)
    this.state={users:[]}
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res=>{console.log(res);this.setState({users:res.data})});    
  }

  render(){

      return(

        <div>
            <h1>call the api</h1> 
            <ul>
              {this.state.Users.map(Users =>(
              
            <li key={Users.id}>
                Name:{Users.name}
                            </li>
            ))};

    </ul>
       </div>
      )
  }
}
  export default CallApi;