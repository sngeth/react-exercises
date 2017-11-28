import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert'

const RATE_TO = 0.841399

export default class CurrencyConversion extends React.Component {
  constructor(props) {
    super(props)

    this.state = { submitted: false,
      amount_to: 0.0,
      amount_from: 0.0,
      rate_from: 0.0,
      rate_to: 0.0
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitted: true, amount_to: this.convert()});
  }

  convert() {
    const { amount_from, rate_from, rate_to } = this.state
    return ((amount_from * rate_from) / RATE_TO);
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
          <Alert>
            <p>
              {this.state.amount_from} at an exchange rate of {this.state.rate_from} is {this.state.amount_to} U.S. dollars.
            </p>
          </Alert>
          : null
        }
        <form className="form-control" onSubmit={this.handleSubmit.bind(this)}>
          <TextInput name="amount_from" label="How many euros are you exchanging?"
            onChange={this.handleChange.bind(this)} />

          <TextInput name="rate_from" label="What is the exchange rate?"
            onChange={this.handleChange.bind(this)} />

          <Submit />
        </form>
      </div>
    )
  }
}
