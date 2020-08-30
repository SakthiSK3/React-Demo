import React,{Component}from 'react';
import './Simple.css';
class SimpleTable extends Component{
  constructor(){
    super();
    this.state={
      Descripition:" ",
      Item:"",
      Quantity:" ",
      Value:" ",
      Amount:" "
    }
  }
 
  render(){
  return(
     <div class="container">
       <div class="card">
        <table class="table">
          <thead><tr><th>Descripition</th><th>Item</th><th>Quantity</th><th>Value</th><th>Amount</th></tr></thead>
           <tbody>
            <tr class="link-hstrike">
              
                        <td><div><input name="name" type="text"  /></div></td>
                        <td><div><input name="description" type="text"  /></div></td>
                        <td>  <div><input name="quantity" type="number" step="1"  /></div></td>
                        <td> <div > <input name="price" type="number" step="0.01" min="0.00" max="9999999.99"  /></div></td>
                        <td><div> <input type="amount" type="number"  /></div></td>
               </tr>
             </tbody>     
      </table>
    
      </div>
      </div>
    )
  
}

}

export default SimpleTable;