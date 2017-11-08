import React from 'react';
import LineItem from './LineItem';

class SelfCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subtotal: 0.0, tax: 0.0, total: 0.0 };
  }

  updateSubtotal = (lineItemSubtotal) => {
    console.log(`line item subtotal is : ${lineItemSubtotal}`);
    this.setState({subtotal: this.state.subtotal + lineItemSubtotal });
  }

  calcTax() {
    return this.state.subtotal * 0.055;
  }

  calcTotal() {
    return this.calcTax() + this.state.subtotal;
  }

  render() {
    return (
      <div>
        <LineItem itemNum="1" updateSubtotal={this.updateSubtotal}/>
        <LineItem itemNum="2" updateSubtotal={this.updateSubtotal}/>
        <LineItem itemNum="3" updateSubtotal={this.updateSubtotal}/>
        <p>Subtotal: ${this.state.subtotal}</p>
        <p>Tax: ${this.calcTax()}</p>
        <p>Total: ${this.calcTotal()}</p>
      </div>
    )
  }
}

export default SelfCheckout;
