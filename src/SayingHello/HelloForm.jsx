import React from 'react'
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert';

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
        { this.state.submitted ?
            <Alert>
              <p>{`Hello, ${this.state.name}`}</p>
            </Alert>
            : null
        }

        <form className="form-control" onSubmit={this.handleSubmit}>
          <TextInput label="What is your name?" onChange={this.handleChange} />
          <Submit />
        </form>
      </div>
    );
  }
}

export default HelloForm
