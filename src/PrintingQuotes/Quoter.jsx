import React from 'react'
import TextArea from '../Shared/Forms/TextArea';
import Button from '../Shared/Forms/Button';
import Alert from '../Shared/Alert';

class Quoter extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuoteChange = this.handleQuoteChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.state = {quote: '', author: '', submitted: false};
  }

  handleQuoteChange(event) {
    this.setState({ quote: event.target.value, submitted: false });
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value, submitted: false });
  }

  handleSubmit(event) {
    this.setState({ submitted: true });
    event.preventDefault();
  }

  printQuote() {
    let {author, quote} = this.state;
    return <Alert content={`${author} says, ${quote}`} />
  }

  render() {
    return (
      <div>
        { this.state.submitted ?
            this.printQuote() : null
        }
        <form onSubmit={this.handleSubmit}>
          <TextArea label="What is the quote?"
            onChange={this.handleQuoteChange} />

          <TextArea label="Who said it?"
            onChange={this.handleAuthorChange} />

          <Button label="Submit" />
        </form>
      </div>
    );
  }
}

export default Quoter
