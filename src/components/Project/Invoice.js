import React,{Component} from 'react';
import logo from './logo.png';

import './Invoice.css';
class Invoice extends Component {
  locale = 'en-US'
  currency = 'USD'


    state = {
      TaxRate: 0.00,
      lineItems: [
        {
          id: 'initial',     
          Item: '',
          Description: '',
          Quantity: 0,
          Price: 0.00,
          Total: 0,
         },
       ]
      };
    handleInvoiceChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }
    handlelineItemsChange = (idx) => (event) => {
      let lineItems = this.state.lineItems.map((item, i) => {
        if (idx !== i) return item
        return {...item, [event.target.name]: event.target.value}
      })
      this.setState({lineItems})
    }
    handleAddlineItems = () => {
      const item = {
        Descripition:'',
        Item:'',
        Quantity:0,
        Price   :0.00,
        Total:''
      };
      this.setState({
        lineItems: [...this.state.lineItems, item]
      });
    };
    handleRemovelineItem = () => {
      this.setState({
        lineItems: this.state.lineItems.slice(0, -1)
      });
    };
    formatCurrency = (amount) => {
    return (new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount))
  };

 
  
    calcTaxAmount = (c) => {
      return c * (this.state.TaxRate / 100)
    }   
  
    calclineItemsTotal = () => {
      return this.state.lineItems.reduce((prev, cur) => (prev + (cur.quantity * cur.price)), 0)
    }
  
    calcTaxTotal = () => {
      return this.calclineItemsTotal() * (this.state.TaxRate / 100)
    }
  
    calcGrandTotal = () => {
      return this.calcLineItemsTotal() + this.calcTaxTotal()
    }
    handleFocusSelect = (event) => {
      event.target.select()
    }
render (){
  
    return ( 
    <div class="container"> 
         <div className="card">
          
           <img src={logo} alt="a logo"/><br/>
           <div class="a" >
            <h2> SOFTWARE INVOICE </h2>
            </div>
           
            <div class="form-group col-md-6">
           <h2>
           <div id="textarea">
             <p class="alignleft">
            <h2>Company Name </h2>
            <textarea input type ="text" name = "textarea" id = "textarea" rows = "5 " cols = "30 "  ></textarea>
            </p>
            <p class="alignright">
              <div class="row ">
              <form>
              <div class="form-group col-md-5 ">
              <label >Invoice No:</label>
              <input type="text" ></input> 
              </div>
               <br/> 
               <div class="form-group col-md-5">
              <label >Date:</label>
               <h3>
              <input type="Date"></input><br/>
              </h3>
              </div>
              <div class="form-group col-md-5 ">
              <label >Customer Id:</label>
              <input type="text"></input><br/>
              </div>
              <div class="form-group col-md-5">
              <label >DueDate:</label>
               <h3>
              <input type="Date"></input><br/>
              </h3>
             </div>
             </form>
             </div>
              </p>
              </div>
              </h2 > 
          
           </div>
            <div id="textarea">
                <h2>
                <p class="alignleft">
                  <label>
                    Client 
                  </label><br/>
                  <textarea input type ="text" name = "textarea" id = "textarea" rows = "5" cols = "30"  ></textarea>
               </p>
              <p class="alignright">
                  <label>Bill To</label><br/>
                 <textarea input type ="text" name = "textarea" id = "textarea" rows = "5" cols = "30"  ></textarea>
            </p>
            </h2>
            </div>
            <table class="table table-bordered  " id="Invoice">
                 <thead>
                    <tr>
                      <th className="text-center"> s/no</th>
                      <th className="text-center"> Descripition </th>
                      <th className="text-center"> Item </th>
                      <th className="text-center"> Quantity </th>
                      <th className="text-center"> Price  </th>
                      <th className="text-center"> Total </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    
                    {this.state.lineItems.map((item, idx) => (
                      <tr id="addr0" key={idx}>
                        <td>{idx  +1}</td>
                        <td>
                          <input type="text" name="Descripition" value={this.state.lineItems[idx].Descripition} onChange={this.handlelineItemsChange(idx)} 
                          />
                        </td>
                        <td>
                          <input
                            type="text" name="Item"  value={this.state.lineItems[idx].Item} onChange={this.handlelineItemsChange(idx)} 
                          />
                        </td> 
                        <td>
                          <input
                            type="number" name="Quantity" step="1"  value={this.state.lineItems[idx].Quantity} onChange={this.handlelineItemsChange(idx)} onFocus={this.state.focusHandler}
                          />
                        </td>
                        <td>
                          <input
                            type="number" name="Price"  step="0.01" min="0.00" max="9999999.99"  value={this.state.lineItems[idx].Price} onChange={this.handlelineItemsChange(idx)} onFocus={this.state.focusHandler}
                          />
                        </td>
                     <td> 
                     <input type="text" readonly="readonly"  $ value={(this.state.lineItems[idx].Quantity *  this.state.lineItems[idx].Price)} />
                     </td>

                        <td>
                        <button type="button" onClick={this.handleRemovelineItem} className="pull-right btn btn-default">
                   X
                 </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
               <h4>
                <button type="button"
                  onClick={this.handleAddlineItems}  className="btn btn-default pull-left"  >
                      + Add Item
                </button>
                </h4>
                <br/><br/>
              <div class="row">
               <div class="col-md-6">  
               <div class="col-md-push-6">
                 <form align="right">
                
                <div class="form-group row">
                 <label for="Subtotal" class="col-sm-2 col-form-label" >Subtotal</label>
                 <div class="col-sm-10">

                 <input type="text" readonly="readonly" value={this.calclineItemsTotal()}/>
            
                 </div>
                 </div>
                 <div class="form-group row" >
                  <br/>
                 <label for="Tax" class="col-sm-2 col-form-label">Tax({this.state.TaxRate})%</label>
                 <div class="col-sm-10" >

                 <input type="text" readonly="readonly" value={this.calcTaxTotal()} />
                  </div>
                 </div>
                  
                 <div class="form-group row">
                 <label for="TotalDue" class="col-sm-2 col-form-label">TotalDue</label>
                 <div class="col-sm-10">
                  <input type="text" readonly="readonly" value={this.calcGrandTotal} />
                </div>
                </div>
                </form>
                </div> 
                </div>
                </div><br/>
                <div class ="card-footer">
                  <h2>Notes</h2>
                   <h3>
                  <p> Invoice Notes specific to each customer or subscription can be provided. ...</p>
                   <p>It can also be set up at a Plan, Addon, or Coupon level,</p>
                   <p>to ensure they are included only when that specific item is part of the Invoice</p>
                   </h3>
                 <br/>
                 <p><h2><center>Thank You </center> </h2></p>
                 </div>
                 </div>
          </div>
       
      );
    }
  }
  
 export default Invoice;