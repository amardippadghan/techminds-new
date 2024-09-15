import React from 'react'

const TUIInput  = ({ placeholder = 'Type here', value, onChange, type = 'text', className = 'input input-bordered  w-full max-w-xs' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};


export default TUIInput