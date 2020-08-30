import React,{Component} from 'react';
   
class Action extends Component{
    state={
       loading: true
    };

    render(){
        return(

       <div> 
            {this.state.loading ? <div><h2>sakthi</h2></div>  :<div> <h1>hema</h1></div>}
      </div>
        )
    }
}
export default Action  ;