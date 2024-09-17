import React from 'react';

const TUIInput = ({
  placeholder = 'Type here',
  value,
  onChange,
  type = 'text',
  className = '',
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input input-bordered input-info w-full max-w-xs ${className} sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`}
      value={value}
      onChange={onChange}
    />
  );
};

export default TUIInput;
