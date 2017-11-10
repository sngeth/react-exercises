import React from 'react';

const TextInput = ({label, name, onChange}) => {
  return (
    <div className="form-group">
      <label>
        {label}
      </label>
      <input className="form-control"
        type="text"
        name={name}
        onChange={onChange}>
      </input>
    </div>
  )
}

export default TextInput;
