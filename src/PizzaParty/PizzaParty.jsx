import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert'

export default class PizzaParty extends React.Component {
  constructor(props) {
    super(props)

    this.state = { people: 0, pizzas: 0, submitted: false}
  }

  handlePeopleChange(event) {
    this.setState({people: event.target.value, submitted: false});
  }

  handlePizzaChange(event) {
    this.setState({pizzas: event.target.value, submitted: false});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});
  }

  totalSlices() {
    return this.state.pizzas * 8;
  }

  calcSlicePerPerson() {
    return Math.floor(this.totalSlices() / this.state.people);
  }

  calcLeftovers() {
    return this.totalSlices() % this.state.people;
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
          <Alert>
            <p>{this.state.people} people with {this.state.pizzas} pizzas</p>
            <p>Each person gets {this.calcSlicePerPerson()} pieces of pizza.</p>
            <p>There are {this.calcLeftovers()} leftover pieces.</p>
          </Alert>
          : null
        }
        <form className="form-control" onSubmit={this.handleSubmit.bind(this)}>
          <TextInput label="How many people?"
            onChange={this.handlePeopleChange.bind(this)} />
          <TextInput label="How many pizzas do you have?"
            onChange={this.handlePizzaChange.bind(this)} />
          <Submit />
        </form>
      </div>
    )
  }
}
