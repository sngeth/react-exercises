import React from 'react';

const TextInput = ({label, name, type="text", onChange}) => {
  return (
    <div className="form-group">
      <label>
        {label}
      </label>
      <input className="form-control"
        type={type}
        name={name}
        onChange={onChange}>
      </input>
    </div>
  )
}

export default TextInput;
