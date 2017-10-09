import React from 'react';

const Alert = ({type, children}) => {
  return (
    <div className={`alert ${type}`} role="alert">
      {children}
    </div>
  )
}

Alert.defaultProps = { type: "alert-success" }

export default Alert;
