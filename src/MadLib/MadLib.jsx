import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert';

class MadLib extends React.Component {
  constructor(props) {
    super(props);
    this.state = { noun: '',
      verb: '',
      adjective: '',
      adverb: '',
      submitted: false };
  }

  handleNounChange(event) {
    this.setState({ noun: event.target.value, submitted: false });
  }

  handleVerbChange(event) {
    this.setState({ verb: event.target.value, submitted: false });
  }

  handleAdjectiveChange(event) {
    this.setState({ adjective: event.target.value, submitted: false });
  }

  handleAdverbChange(event) {
    this.setState({ adverb: event.target.value, submitted: false });
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
    event.preventDefault();
  }

  printMadLib() {
    let { noun, verb, adjective, adverb} = this.state;
    return `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
            <Alert>
              <p>{this.printMadLib()}</p>
            </Alert>
            : null
        }
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextInput label="Enter a noun:"
            onChange={this.handleNounChange.bind(this)} />
          <TextInput label="Enter a verb:"
            onChange={this.handleVerbChange.bind(this)} />
          <TextInput label="Enter an adjective:"
            onChange={this.handleAdjectiveChange.bind(this)} />
          <TextInput label="Enter an adverb :"
            onChange={this.handleAdverbChange.bind(this)} />
          <Submit />
        </form>

      </div>
    )
  }
}

export default MadLib
