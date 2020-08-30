import React,{Component} from 'react';
import logo from './logo.png';
import './Style.css';

class Second extends Component{
constructor(props){
super(props);
this.state={
   
  }
}
handleAvilCreditChange = (event) =>{

  this.setState({
    AvilCredit: event.target.value
  })
}
handleCreateInvoiceChange = (event) =>{

  this.setState({
    CreateInvoice: event.target.value
  })
}
handleRequestMoneyChange = (event) =>{

  this.setState({
    RequestMoney: event.target.value
  })
}
handlePayyourBillsChange = (event) =>{

  this.setState({
    PayyourBills: event.target.value
  })
}
handleLinkyourAccountsChange = (event) =>{

  this.setState({
    LinkyourAccounts: event.target.value
  })
}
handleOpenAccountChange = (event) =>{
  
  this.setState({
    OpenAccount: event.target.value
  })
}
handleScanQRChange = (event) =>{
  
  this.setState({
    ScanQR: event.target.value
  })
}

render(){
  
  return (
<div className="container">
<div className="card">
  <img src={logo}  alt="A logo"></img >  <br/> <br/>
  <center>
    <form>
<div><h5>
<input type="text" value="Avil Credit " onChange={this.handleAvilCreditChange}></input> <br/> <br/>
<input type="text" value="Create Invoice " onChange={this.handleCreateInvoiceChange}></input> <br/> <br/>
<input type="text" value="Request Money " onChange={this.handleRequestMoneyChange}></input> <br/> <br/>
<input type="text" value="Pay  Your Bills " onChange={this.handlePayyourBillsChange}></input> <br/> <br/>
<input type="text"  value="Link Your Accounts " onChange={this.handleLinkyourAccountsChange}></input> <br/> <br/>
<input type="text" value="Open Account " onChange={this.handleOpenAccountChange}></input> <br/> <br/>
<input type="text" value="Scan QR  " onChange={this.handleScanQRChange}></input> <br/> <br/>
</h5>
</div>
</form>

</center>
</div>
</div>
  )

} 
}
export default Second;