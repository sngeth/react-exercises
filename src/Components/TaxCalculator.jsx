import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert';

//You don’t always need a complex control structure to solve
//simple problems. Sometimes a program requires an extra
//step in one case, but in all other cases there’s nothing to do.
//  Write a simple program to compute the tax on an order
//amount. The program should prompt for the order amount
//and the state. If the state is “WI,” then the order must be
//charged 5.5% tax. The program should display the subtotal,
//  tax, and total for Wisconsin residents but display just the
//total for non-residents.
//  Example Output

export default class TaxCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false,
      subtotal: 0.0,
      amount: 0.0,
      state: ""
    };
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitted: true, amount: this.calculate()});
  }

  calculate() {
    if (this.state.state === "WI") {
      let tax = this.state.subtotal * 0.055;
      let total = parseFloat(this.state.subtotal) + tax;
      return `The subtotal is ${this.state.subtotal} The tax is ${tax}. The total is $${total}`;
    }

    return `The total is $${this.state.subtotal}`;
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
          <Alert>
            <p>
              {this.state.amount}
            </p>
          </Alert>
          : null
        }
        <form className="form-control" onSubmit={this.handleSubmit.bind(this)}>
          <TextInput name="subtotal" label="What is the order amount?"
            onChange={this.handleChange.bind(this)} />
          <TextInput name="state" label="What is the state?"
            onChange={this.handleChange.bind(this)} />
          <Submit />
        </form>
      </div>
    );
  }
}
