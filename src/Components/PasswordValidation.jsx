import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert';

export default class PasswordValidation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { submitted: false,
      password: "",
      message: ""
    };

    this.passwords = ["abc$123"];
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({submitted: true});
    this.checkPassword(this.state.password);
  }

  checkPassword(password) {
    if(this.passwords.includes(password))
      this.setState({message: "Welcome!"});
    else
      this.setState({message: "I don't know you."});
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
          <Alert>
            <p>
              {this.state.message}
            </p>
          </Alert>
          : null
        }
        <form className="form-control" onSubmit={this.handleSubmit.bind(this)}>
          <TextInput type="password" name="password" label="What is the password?"
            onChange={this.handleChange.bind(this)} />
          <Submit />
        </form>
      </div>
    );
  }
}
