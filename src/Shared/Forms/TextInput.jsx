import React from 'react';

const TextInput = ({label, onChange}) => {
  return (
    <div className="form-group">
      <label>
        {label}
      </label>
      <input className="form-control"
        type="text"
        onChange={onChange}>
      </input>
    </div>
  )
}

export default TextInput;
