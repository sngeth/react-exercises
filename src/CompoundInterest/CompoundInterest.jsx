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
      compounded_per_year: 0.0,
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

  //The formula you’ll use for this is where P is the principal amount.
  //  r is the annual rate of interest.
  //  t is the number of years the amount is invested.
  //  n is the number of times the interest is compounded per year.
  //  A is the amount at the end of the investment.
  calculate() {
    const { principal, interest_rate, compounded_per_year, years } = this.state;
    // A = P(1 + r/n)^nt
    console.log(this.state)

    let r_over_n = (interest_rate / 100) / compounded_per_year;
    let nt = compounded_per_year * years;
    let A = principal * Math.pow((1 + r_over_n), nt);

    return A.toFixed(2);
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
          <Alert>
            <p>
              ${this.state.principal} invested at {this.state.interest_rate}%, for {this.state.years} years compounded {this.state.compounded_per_year} times per year is ${this.state.amount}
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

          <TextInput name="compounded_per_year" label="Enter the number of times interest is compounded per year: "
            onChange={this.handleChange.bind(this)} />

          <Submit />
        </form>
      </div>
    );
  }
}
