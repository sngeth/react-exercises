import React from 'react'
import Greeter from './Greeter'
import TextInput from '../Shared/Forms/TextInput';
import Button from '../Shared/Forms/Button';

class HelloForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: '', submitted: false};
  }

  handleChange(event) {
    this.setState({ name: event.target.value, submitted: false });
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        { this.state.submitted ? <Greeter name={this.state.name} /> : null }

        <form onSubmit={this.handleSubmit}>
          <TextInput label="What is your name?" onChange={this.handleChange} />
          <Button label="Submit" />
        </form>
      </div>
    );
  }
}

export default HelloForm
