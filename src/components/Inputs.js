// Inside components/Inputs.js

import React from "react";

const Input = ({ id, inputName, inputType, value, onChange, isValid }) => {
  const inputStyle = isValid === null ? {} : isValid ? { borderColor: 'green' } : { borderColor: 'red' };
  
  return (
    <input
      type={inputType}
      name={inputName}
      id={id}
      value={value}
      onChange={onChange}
      style={inputStyle}
    />
  );
};

export default Input;
