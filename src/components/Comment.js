import React,{component} from 'react';
import axios from 'axios';
import {Link , NavLink,withRouter} from 'react-router-dom';
class Comments extends React, component{
    constructor(props){
     super(props)
     this.state={ comments:[]}
    }
    ComponentDidMount(){
        axios('https://jsonplaceholder.typicode.com/comments'+this.props.match.params.id)
        .then(res=>{console.log(res);this.setstate({comments:res.data})});
        }

        render(){
          return (
            <div className="container">
              <button type="button" onClick={this.handleClick} className="btn btn-block">
                  Back
              </button>
              <h2>Comments of {this.props.match.params.name}</h2>
            <table className="table">
              <thead><tr><th>Id</th><th>name </th><th>email</th><th> body</th></tr></thead>
              <comment comments={this.state.comments}></comment>
            </table>  
          </div>)
        }
      }
      
      const comments =(props)=>{
        return (<tbody>
            {props.comments.map(post => (
              <tr className="text-left" key={comments.id}><td>{comments.id}</td><td>{comments.nmae}</td> <td> {comments.email}</td><td>{comments.body}</td></tr>
            ))}
            </tbody>);
      
      }
      export default comments;
      