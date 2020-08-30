import React,{Component} from 'react';

class First extends Component{
render(){
{
    
    
    return (
      <div className="container">
<div>
  <card>
          
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
}
export default First;