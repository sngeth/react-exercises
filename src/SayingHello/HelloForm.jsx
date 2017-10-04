import React from 'react'
import Greeter from './Greeter'

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
          <label>
            What is your name?
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        { this.state.submitted ? <Greeter name={this.state.name} /> : null }
      </div>
    );
  }
}

export default HelloForm
