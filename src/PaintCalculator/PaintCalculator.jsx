import React from 'react';
import TextInput from '../Shared/Forms/TextInput';
import Submit from '../Shared/Forms/Submit';
import Alert from '../Shared/Alert'

const GAL_PER_SQFT = 350;

export default class PaintCalculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = { length: 0, width : 0, submitted: false}
  }

  handleLengthChange(event) {
    this.setState({length: event.target.value, submitted: false});
  }

  handleWidthChange(event) {
    this.setState({width: event.target.value, submitted: false});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});
  }

  calcArea() {
    return this.state.length * this.state.width;
  }

  calcGallonsNeeded() {
    return Math.ceil(this.calcArea() / GAL_PER_SQFT);
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
          <Alert>
            <p>You will need to purchase {this.calcGallonsNeeded()} gallons of
              paint to cover {this.calcArea()} square feet.
            </p>
          </Alert>
          : null
        }
        <form className="form-control" onSubmit={this.handleSubmit.bind(this)}>
          <TextInput label="What is the length?"
            onChange={this.handleLengthChange.bind(this)} />
          <TextInput label="What is the width"
            onChange={this.handleWidthChange.bind(this)} />
          <Submit />
        </form>
      </div>
    )
  }
}
