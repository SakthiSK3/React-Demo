import React,{Component}from 'react';
import './Row.css';
class Row extends Component{
 render(){
    return (  
      <form>
        <div class="grid-container">
       <div class="item">subtotal</div>
       <div class="value">123</div>
       <div class="item ">tax</div>  
       <div class="value">456</div> 
       <div class="item">Grand total</div>
      <div class="value">789</div>
  
</div>
          </form>
       
    )
 }
     
 
}
export default Row ;