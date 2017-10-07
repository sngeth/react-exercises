import React from 'react'
import QuotePrinter from './QuotePrinter'
import TextArea from '../Shared/Forms/TextArea';
import Button from '../Shared/Forms/Button';

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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextArea label="What is the quote?"
            onChange={this.handleQuoteChange} />

          <TextArea label="Who said it?"
            onChange={this.handleAuthorChange} />

          <Button label="Submit" />
        </form>
        { this.state.submitted ?
          <QuotePrinter author={this.state.author} quote={this.state.quote} />
          : null
        }
      </div>
    );
  }
}

export default Quoter
