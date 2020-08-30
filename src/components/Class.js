import React from 'react';


class Home extends React.Component {
 constructor(props){
   super(props);
     this.state={
     yesterday:"Histry",
    today:"today is real ",
    tomorrow:"mistry"
   };
 }
changeJob=(e)=>{
  document.write("Yesterday:"+this.state.yesterday+"<br/>");
  document.write("Today:"+this.state.today + "<br/>");
  document.write("Tomorrow:"+this.state.tomorrow);

}

  render(){
  return(
          <div>  
          <input type ="submit" onClick={this.changeJob}/>
          
          </div>
        );
        
    }
  }
 export default Home;