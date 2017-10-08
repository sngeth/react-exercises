import React from 'react';

const Greeter = ({name}) => {
  return (
    <div className="alert alert-primary" role="alert">
      Hello, {name}
    </div>
  )
}

export default Greeter;
