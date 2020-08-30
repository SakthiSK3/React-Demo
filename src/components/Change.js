import React from 'react';
import Class from './Class';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    value: 'random text'
    }
  }
 handleClick(){
 this.setState({ value:"he  is a gud boy"})

 }
  
  render () {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleClick.bind(this)}>Change Input</button>
       name={"sakthi"}
      </div>
    )
  }
}

export default App;