import React from 'react'
import TextArea from '../Shared/Forms/TextArea';

class CharacterCounter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { string: '', count: 0 }
  }

  handleChange(event) {
    var string = event.target.value;
    var count = this.countCharacters(string);
    this.setState({ string: string, count: count });
  }

  countCharacters(str) {
    return str.length
  }

  render() {
    return (
      <div>
        <form className="form-control">
          <TextArea label="What is the input string?"
            onChange={this.handleChange} />
        </form>

        { this.state.string.length !== 0 ? <p>{this.state.string} has {this.state.count} characters.</p> : null }
      </div>
    );
  }
}

export default CharacterCounter
