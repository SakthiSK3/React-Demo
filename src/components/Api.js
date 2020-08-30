import React,{Component} from 'react';
import axios from 'axios';

// import './App.css';
// import {Link , NavLink,withRouter} from 'react-router-dom';
class Api extends Component {
  constructor(props){
    super(props);
    this.state={article:{}}
  }
 
  onclick=(ev)=>{
  ev.preventDefault();
  let article={}
  for(let i in ev.target.elements){
    if(ev.target.elements[i].value!==undefined && ev.target.elements[i].value!==''){
    // console.log(ev.target.elements[i].name)
    // console.log(ev.target.elements[i].value)
    
    article[ev.target.elements[i].name]=ev.target.elements[i].value
    }
 
  }
  console.log(article)
  axios.post('/createBlog',article)
  .then(res=>console.log(res))
}
  
  
  render()
  {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    
    };
    return (
      <div className="container">
<div>
  <card>
          <h1 style={mystyle} > create blog</h1>
           <form  onSubmit={this.onclick}>
          <div>title</div>
          <input type ="text" name="title" className="form-control" placeholder="    "/> <br/>
          <div>author</div>
          <input type ="text" name="author" className="form-control" placeholder="    "/> <br/>
          <div>blog </div>
          <input type ="text" name="blog" className="form-control" placeholder="    "/> <br/>
          <br/>
          
          <button>create</button><br/>
          
          </form>
          </card>
          </div>
      </div>      
  
    )
  }
}

export default Api;
