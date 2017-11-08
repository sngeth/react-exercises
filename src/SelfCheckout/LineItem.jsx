import React from 'react'
import TextInput from '../Shared/Forms/TextInput'

class LineItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { price: 1, qty: 0, subtotal: 0 };

    this.handlePrice = this.handlePrice.bind(this);
    this.handleQty = this.handleQty.bind(this);
  }

  calcSubtotal() {
    let subtotal = this.state.price * this.state.qty;
    this.props.updateSubtotal(subtotal);
  }

  handlePrice(event) {
    this.setState({price: event.target.value}, this.calcSubtotal);
  }

  handleQty(event) {
    this.setState({qty: event.target.value}, this.calcSubtotal);
  }

  render() {
    return (
      <div>
        <TextInput label={`Enter the price of item ${this.props.itemNum}:`}
          onChange={this.handlePrice} />
        <TextInput label={`Enter the quantity of item ${this.props.itemNum}:`}
          onChange={this.handleQty} />
      </div>
    )
  }
}

export default LineItem;
