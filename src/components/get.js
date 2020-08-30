  import React,{Component} from 'react';
  import axios from 'axios';
  //import {Link , NavLink,withRouter} from 'react-router-dom';
  class Getblog extends Component {
    constructor(props){
      super(props)
      this.state={user:[]
      // inputtext :''
      }

    
      // const parmas=this.state.inputext
      axios({
    method: 'post',
    url:'/getBlog',
    headers :{'Content-type':'Application/json'},
    data:{title:'React'}
     })
    .then(res=> {console.log(res.data); this.setState({user:res.data}) });
      
     }
    render(){
    return(<div>
      {/* <input type="submit" onClick={(e)=>this.submitfun(e)}/> */}
    <UserTbl userList={this.state.user}> </UserTbl>
    </div>)
    }

  }  

  const UserTbl=(props)=>{
  const array=[props.userList]
  console.log(array);
  
 
    return <div className="row">
      {
        array.length > 0 ?
        <div className="card-body container mx-auto m-3">
          <div className="row mx-auto">
            <table className="bg-dark text-white text-left table mt-1 table-striped bg-light mx-auto col-md-6 width:100%">
            <thead><tr><th>title</th><th> author </th><th> blog</th></tr></thead>
            <tbody>
              {/*<input type="file"></input>*/}
            {array.map((user )=><tr className="link hstrike" key={user.title}><td> {user.title}</td><td>{user.author}</td><td> {user.blog}</td></tr>)}
            </tbody>
            </table>
          </div>
        </div>
        : <div className="mx-auto m-5 text-light">No Users in the List</div>
      }
      </div>
    
} 
export default Getblog;