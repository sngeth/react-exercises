import React from 'react';

const Submit = ({label}) => {
  return (
    <button className="btn btn-primary" type="submit">
      { label }
    </button>
  )
}

Submit.defaultProps = { label: 'Submit' }

export default Submit;
