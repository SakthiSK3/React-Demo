import React from 'react';
class Simple extends React.Component {
constructor(props){
  super(props);
  this.state={
    color:"blue"
  
};
this.clickHandler=this.clickHandler.bind(this)
}
clickHandler = ()=>
{
this.setState({
color: "pink"
}
)
}

render(){
  return(
  <div>
    <h1 style={{ color:this.state.color}}> sakthi</h1>
 <button onClick={this.clickHandler}>click</button>
 
  </div>
  );
}
 }


export default Simple;