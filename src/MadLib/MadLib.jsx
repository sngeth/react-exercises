import React from 'react';
import TextArea from '../Shared/Forms/TextArea';

class MadLib extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextArea label="Enter a noun:" />
          <TextArea label="Enter a verb:" />
          <TextArea label="Enter a adjective:" />
          <TextArea label="Enter a adverb :" />

          <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default MadLib
