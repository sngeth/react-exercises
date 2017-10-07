import React from 'react';

const TextArea = ({label, onChange}) => {
  return (
    <div className="form-group">
      <label>
      { label }
      <textarea className="form-control"
        onChange={ onChange }>
      </textarea>
      </label>
    </div>
  )
}

export default TextArea;
