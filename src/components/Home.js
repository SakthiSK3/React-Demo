import React from 'react';
//class Home extends React.Component {
  const Home = props =>{
    //console.log(this.props);

    return <div> 
      <h1>I am a { props.name }</h1>
      <h1> my professional is   {props.job}</h1>
    
    
    </div>
  }
  


export default Home;

