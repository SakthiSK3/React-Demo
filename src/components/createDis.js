import React,{Component} from 'react';
import axios from 'axios';

// import './App.css';
// import {Link , NavLink,withRouter} from 'react-router-dom';
class Discussion extends Component {
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
  axios.post('/createDiscussion',article)
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
       
      <div  class="card">
          <h1 style={mystyle} > create discussion</h1>
          
           <form  onSubmit={this.onclick}>
          <div>title</div>
          <input type ="text" name="title" className="form-control" placeholder="    "/> <br/>
          <div></div>content
          <input type ="text" name="content" className="form-control" placeholder="    "/> <br/>
          <div> author</div>
          <input type ="text" name="author" className="form-control" placeholder="    "/> <br/>
          
          {/*<div className="input-group">
         <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
          Upload
         </span>
         </div>
         <div className="custom-file">
          <input
           type="imagefile"
         className="custom-file-input"
         id="inputGroupFile01"
         aria-describedby="inputGroupFileAddon01"
         />
         <label className="custom-file-label" htmlFor="inputGroupFile01">
         Choose file
        </label>
        </div>
        </div>*/}
          <input type="file"></input> <br/> <br/>
        <button>create</button><br/>
          
          </form>
        </div>
     </div>
          
 
    )
  }
}

export default Discussion;
