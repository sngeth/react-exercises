import React from 'react'
import TextInput from '../Shared/Forms/TextInput'

class LineItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { price: 1, qty: 0, subtotal: 0 };
  }

  calcSubtotal() {
    let subtotal = this.state.price * this.state.qty;
    this.props.updateSubtotal(subtotal);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value}, this.calcSubtotal);
  }

  render() {
    return (
      <div>
        <TextInput name="price" label={`Enter the price of item ${this.props.itemNum}:`}
          onChange={this.handleChange.bind(this)} />
        <TextInput name="qty" label={`Enter the quantity of item ${this.props.itemNum}:`}
          onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}

export default LineItem;
