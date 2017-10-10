import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert';

const sqFtTosqM = 0.09290304;

export default class RoomArea extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      length: '',
      width: '',
      submitted: false,
    }
  }


  handleLengthChange(event) {
    this.setState({length: event.target.value});
  }

  handleWidthChange(event) {
    this.setState({width: event.target.value});
  }

  calcArea() {
    let {length, width} = this.state;
    return length*width;
  }

  calcAreaMeters() {
    return this.calcArea() * sqFtTosqM;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
            <Alert>
              <p>The area is {this.calcArea()} square feet</p>
              <p>{this.calcAreaMeters()} square meters</p>
            </Alert>
            : null
        }
        <form className="form-control" onSubmit={this.handleSubmit.bind(this)}>
          <TextInput label="What is the length of the room?"
            onChange={this.handleLengthChange.bind(this)} />

          <TextInput label="What is the width of the room?"
            onChange={this.handleWidthChange.bind(this)} />
          <Submit />
        </form>
      </div>
    )
  }
}
