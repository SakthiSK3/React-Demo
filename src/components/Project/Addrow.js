import React from 'react';

import './Invoice1.css';
class App extends React.Component {
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
    render() {    
      var Sum=[this.state.Total];
      console.log(Sum)
      return (
        <div className="container">
          <div className="row clearfix">
            <div className="card "> 
              <table class="table table-bordered">
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
                      <tr  >
                        <td>{idx +1}</td>
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
                   -
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
              <form >

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
            </div>

      
        
      );
    }
  }
export default App;