import React from 'react';

const Alert = ({content, type}) => {
  return (
    <div className={`alert ${type}`} role="alert">{content}</div>
  )
}

Alert.defaultProps = { type: "alert-success" }

export default Alert;
