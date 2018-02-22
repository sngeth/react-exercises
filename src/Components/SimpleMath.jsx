import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';

class SimpleMath extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      first: '',
      second: '',
      submitted: false
    };
  }

  add({first, second}) {
    let result = parseInt(first, 10) + parseInt(second, 10);
    return `${ first } + ${ second } is ${result}`;
  }

  sub({first, second}) {
    let result = first - second;
    return `${ first } - ${ second } is ${result}`;
  }

  mult({first, second}) {
    let result = first * second;
    return `${ first } * ${ second } is ${result}`;
  }

  div({first, second}) {
    let result = first / second;
    return `${ first } / ${ second } is ${result}`;
  }

  showResults() {
    return (
      <div>
        <p>{this.add(this.state)}</p>
        <p>{this.sub(this.state)}</p>
        <p>{this.mult(this.state)}</p>
        <p>{this.div(this.state)}</p>
      </div>
    )
  }

  handleFirstChange(event) {
    this.setState({ first: event.target.value, submitted: false });
  }

  handleSecondChange(event) {
    this.setState({ second: event.target.value, submitted: false });
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        { this.state.submitted ? this.showResults() : null }

        <form className="form-control" onSubmit={this.handleSubmit}>
          <TextInput label="What is the first number?"
            onChange={this.handleFirstChange.bind(this)} />

          <TextInput label="What is the second number?"
            onChange={this.handleSecondChange.bind(this)} />

          <Submit />
        </form>
      </div>
    )
  }
}

export default SimpleMath;
