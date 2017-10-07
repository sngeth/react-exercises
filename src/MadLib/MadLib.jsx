import React from 'react';
import TextArea from '../Shared/Forms/TextArea';
import Button from '../Shared/Forms/Button';

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
    return `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious`
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextArea label="Enter a noun:"
            onChange={this.handleNounChange.bind(this)} />
          <TextArea label="Enter a verb:"
            onChange={this.handleVerbChange.bind(this)} />
          <TextArea label="Enter an adjective:"
            onChange={this.handleAdjectiveChange.bind(this)} />
          <TextArea label="Enter an adverb :"
            onChange={this.handleAdverbChange.bind(this)} />
          <Button label="Submit" />
        </form>

        { this.state.submitted ?
          this.printMadLib() : null
        }
      </div>
    )
  }
}

export default MadLib
