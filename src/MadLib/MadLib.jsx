import React from 'react';
import TextArea from '../Shared/Forms/TextArea';
import Button from '../Shared/Forms/Button';

class MadLib extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextArea label="Enter a noun:" />
          <TextArea label="Enter a verb:" />
          <TextArea label="Enter an adjective:" />
          <TextArea label="Enter an adverb :" />
          <Button label="Submit" />
        </form>
      </div>
    )
  }
}

export default MadLib
