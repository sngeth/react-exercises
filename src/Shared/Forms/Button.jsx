import React from 'react';

const Button = ({label}) => {
  return (
    <button className="btn btn-primary" type="submit">
      { label }
    </button>
  )
}

export default Button;
