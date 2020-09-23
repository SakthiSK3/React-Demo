 import React,{Component} from 'react';
 import './website.css';
 import ReactPlayer from 'react-player'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { Button,  Col,  Row, NavLink  } from 'reactstrap';
 import Image from './Image';
 class Website extends Component{
    state={
   Email:"sakthi.sk.jai@gmail.com",
   Mob: 8667679665 ,  
  }
   render(){
     return(
          <div className="container">
            <div class="topnav">
        
          <a href="#about">Change</a>
          <a href="#contact">Size</a>
          <div class="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search"/>
            
            </form>
          </div>
        </div>
    
       <div className="card">
         <div className="card-header">
           <div id="textarea">
           <p class="alignleft">
         <Image/>
         </p> 
                <p class="alignright">
                <Row>
              <div>
               <FontAwesomeIcon icon={['fab', 'youtube'  ]}size="2x" color="blue"   />
                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="blue"/>
               <FontAwesomeIcon icon={['fab', 'google']}size="2x" color="blue"   />
               </div> 
               <h3>
                  <p>Sakthi K || Software Developer</p>
                 <p>  Email: <a href="mail: {this.props.email}">{this.state.Email}</a></p>
                  <p> Mob: <a href="mail: {this.props.email}">{this.state.Mob}</a></p>
                  </h3>
                  </Row>
                  </p>
                  </div>
                  </div>
              <div className="card-body">
              <div class="heading">
                <h1>React and React Bootstrap</h1>
                <p>React is a library for building composable user interfaces. It encourages the creation of reusable UI components</p>
                <p> which present data that changes over time</p>
              </div >
             <div class="video">
              <ReactPlayer
              width="480px"
              height="240px"
              controls url ='https://youtu.be/jgVkR5EKI68'>
              </ReactPlayer> 
              </div><br/><br/>
              <div class="button">
                <Row>
                    <Col xs="4">                      
                        <Button color="success" className="px-4">
                            PLAY
                         </Button>
                      </Col>
                      <Col xs="4">                      
                        <Button color="success" className="px-4">
                          ADD
                         </Button>
                        
                    </Col>
                          <Col xs="4">                      
                              <Button color="success" className="px-4">
                                EDIT
                              </Button>
                              </Col>
                   </Row>
                   </div><br/><br/>
                  
               <div class="row">
                          <div class="col-md-3 ">
                            <ReactPlayer
                          width="200"
                          height="120px"
                          controls url ='https://www.youtube.com/watch?v=insbtWGGrY8'>
                          </ReactPlayer>
                          </div>
                          <div class="col-md-3 ">

                          <ReactPlayer
                          width="200"
                          height="120px"
                          controls url ='https://www.youtube.com/watch?v=pCgDRgmfilE&t=111s'>
                          </ReactPlayer>
                          </div>
                          <div class="col-md-3 ">

                          <ReactPlayer
                          width="200"
                          height="120px"
                          controls url ='https://youtu.be/Y2hgEGPzTZY'>
                          </ReactPlayer>
                          </div>
                          <div class="col-md-3 ">

                          <ReactPlayer
                          width="200"
                          height="120px"
                          controls url ='https://www.youtube.com/watch?v=00kXjx9k3Os'>
                          </ReactPlayer>
                          </div>
                   </div>
                  
              </div>
          
        <div className ="card-footer">
        <p> React. js is a very new, but also established library to make reusable view components which are encapsulated,  easy to maintain.</p> <p>More and more companies are using it in their productive environments.</p>
             </div><br/>
                 <Row>
                    <Col xs="1">                      
                        <Button color="info" className="px-4">
                            Cancel
                         </Button>
                      </Col>
                      <Col xs="1">                      
                        <Button color="info" className="px-4">
                            Save And Next 
                         </Button>
                        
                    </Col>
                   </Row>
         </div>
       </div>
     )
    }
   }
 export default Website;