import React,{Component} from 'react';
class Addition extends Component {
constructor(){
super()
this.state={
  Num1:'',
  Num2:'',
  total:''
}
}
handleNum1 = (event) =>{
this.setState({
 Num1:event.target.value
})

}
handleNum2 = (event) =>{
    this.setState({
     Num2:event.target.value
    })
    
}  
exe = (event) =>{
        this.setState({
            total:parseFloat(this.state.Num1)+parseFloat (this.state.Num2)
        })
       // event.prevent.default();
 }
render()
  {
    return(
     <div>
     <h1> Add two numbers </h1>
     <form onSubmit={this.exe}>
      <div>
      Number 1:  <input type ="text"  value={this.state.Num1} onChange={this.handleNum1} /> 
        </div>
      <br/>
      <div>
      Number 2:  <input type ="text" value={this.state.Num2}  onChange={this.handleNum2}/> 
      </div>
      <br/>
      <button type="submit">Add</button>
      <br/>
      total={this.state.total}
     </form>
     </div>

    );
  }
 
}
export default Addition;