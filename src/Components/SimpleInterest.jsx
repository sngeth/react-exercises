import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert';

export default class SimpleInterest extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false,
      principal: 0.0,
      interest_rate: 0.0,
      years: 0.0,
      amount: 0.0
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
    const { principal, interest_rate, years } = this.state;
    return (principal * (1 + (interest_rate/100) * years));
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
          <Alert>
            <p>
              After {this.state.years} at {this.state.interest_rate}%, the
              investment will be worth ${this.state.amount}
            </p>
          </Alert>
          : null
        }
        <form className="form-control" onSubmit={this.handleSubmit.bind(this)}>
          <TextInput name="principal" label="Enter the principal: "
            onChange={this.handleChange.bind(this)} />

          <TextInput name="interest_rate" label="Enter the rate of interest: "
            onChange={this.handleChange.bind(this)} />

          <TextInput name="years" label="Enter the number of years: "
            onChange={this.handleChange.bind(this)} />
          <Submit />
        </form>
      </div>
    );
  }
}
