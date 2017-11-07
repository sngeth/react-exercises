import React from 'react';
import LineItem from './LineItem';

class SelfCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subtotal: 0.0 };
  }

  updateSubtotal = (lineItemSubtotal) => {
    this.setState({subtotal: lineItemSubtotal});
  }

  render() {
    return (
      <div>
        <LineItem itemNum="1" updateSubtotal={this.updateSubtotal}/>
        <p>Subtotal: ${this.state.subtotal}</p>
      </div>
    )
  }
}

export default SelfCheckout;
