import React from 'react'
import Greeter from './Greeter'
import TextArea from '../Shared/Forms/TextArea';

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
        <form onSubmit={this.handleSubmit}>
          <TextArea label="What is your name?" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>

        { this.state.submitted ? <Greeter name={this.state.name} /> : null }
      </div>
    );
  }
}

export default HelloForm
