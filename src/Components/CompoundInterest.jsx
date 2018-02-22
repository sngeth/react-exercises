import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert';

export default class CompoundInterest extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false,
      principal: 0.0,
      interest_rate: 0.0,
      years: 0.0,
      num_compounded_year: 0.0,
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
    const { principal, interest_rate, years, num_compounded_year } = this.state;
    return (principal * (Math.pow((1 + (interest_rate/100)/num_compounded_year), num_compounded_year * years))).toFixed(2);
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
          <TextInput name="principal" label="What is the principal amount? "
            onChange={this.handleChange.bind(this)} />
          <TextInput name="interest_rate" label="What is the rate? "
            onChange={this.handleChange.bind(this)} />
          <TextInput name="years" label="What is the number of years? "
            onChange={this.handleChange.bind(this)} />
          <TextInput name="num_compounded_year" label="What is the number of times the interest is compounded per year? "
            onChange={this.handleChange.bind(this)} />
          <Submit />
        </form>
      </div>
    );
  }
}
