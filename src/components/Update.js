import React , {Component} from 'react';

class Update extends Component{
constructor(){
super()
this.state={
    name:"sakthi",
    id:"123"
};

}

render(){

    setTimeout(()=>{this.setState({name:"hema", id:"143"})},4000)
     return(
        <div>
<h1>Name:{this.state.name}</h1><br/>
<h2>id:{this.state.id}            </h2>
        </div>
    )

}
}
export default Update;