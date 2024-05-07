import React from "react";

const Dropdown = ({ options, selectedValue, onChange, className, name }) => (
  <select
    className={`block appearance-none w-full bg-primaryColor border text-primaryTextColor border-buttonColor hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ${className}`}
    value={selectedValue}
    onChange={onChange}
  >
    <option value="">{name}</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Dropdown;
