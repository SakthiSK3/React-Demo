import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import Profile from './Profile'
import image_1 from './image_1.png'; 
 import image_2 from './image_2.png';
 import logo from './logo.png';

class Image extends Component {
    constructor(props){
        super(props);
        this.state={
           ProfileImage:''
        }
    }
    handleImageChange =   (ProfileImage) =>{
        this.setState({
            ProfileImage 
        })
    }
    render(){
        return(
            <div >
            <Avatar size={150} icon=  {<img src={logo} alt="a log"/>} src={this.state.ProfileImage}/>
            <Profile   handleImageChange={this.handleImageChange} image_1 ={image_1} image_2={image_2}/>
         
            </div>
        )
    }

}
export default Image;