import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert'

class RetirementCalculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      age: '',
      desiredAge: '',
      submitted: false,
    }
  }


  retireYears() {
    return this.state.desiredAge - this.state.age;
  }

  currentYear() {
    return (new Date()).getFullYear();
  }

  yearsUntilRetirement() {
    return `You have ${this.retireYears()} years left until you can retire.`
  }

  dateUntilRetirement() {
    return `It's ${this.currentYear()}, so you can retire in ${this.currentYear() + this.retireYears()}.`
  }

  handleAgeChange(event) {
    this.setState({age: event.target.value, submitted: false});
  }

  handleDesireAgeChange(event) {
    this.setState({desiredAge: event.target.value, submitted: false});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
          <Alert>
            <p>{this.yearsUntilRetirement()}</p>
            <p>{this.dateUntilRetirement()}</p>
          </Alert>
          : null
        }
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextInput label="What is your current age?"
            onChange={this.handleAgeChange.bind(this)} />
          <TextInput label="At what age would you retire?"
            onChange={this.handleDesireAgeChange.bind(this)} />
          <Submit />
        </form>
      </div>
    )
  }
}

export default RetirementCalculator;
