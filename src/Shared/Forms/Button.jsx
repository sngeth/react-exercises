import React from 'react';

const Button = ({label}) => {
  return (
    <button className="btn btn-primary" type="submit">
      { label }
    </button>
  )
}

Button.defaultProps = { label: 'Submit' }

export default Button;
