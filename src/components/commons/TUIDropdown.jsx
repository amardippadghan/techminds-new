import React from 'react';

const TUIDropdown = ({
  options = [],
  value,
  onChange,
  className = '',
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`select select-bordered  w-full max-w-xs ${className} sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl`}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default TUIDropdown;
