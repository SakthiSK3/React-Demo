import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';



class Profile  extends Component {
    constructor(props){
        super(props);
        this.state={
            visible: false,
        imagesArray:[props.image_1,props.image_2]
        }
    }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
    render(){
        const  imageMapper=this.state.imagesArray.map((image, index) =>{
            return(
                <img src={image}    
                onClick={() => this.props.handleImageChange(image)}
                height="48px"
                 />
                
            )
        })
        return(
            <div >
 <Button type="primary" onClick={this.showModal}>
          Change
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {imageMapper}
        </Modal> {" "}           </div>
        )
    }

}
export default Profile;