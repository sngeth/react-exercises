import React from 'react'
import QuotePrinter from './QuotePrinter'

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
          <div className="form-group">
            <label>
              What is the quote?
              <textarea className="form-control" onChange={this.handleQuoteChange}></textarea>
            </label>
          </div>

          <div className="form-group">
          <label>
            Who said it?
            <textarea className="form-control" type="text" onChange={this.handleAuthorChange}></textarea>
          </label>
          </div>
          <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
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
