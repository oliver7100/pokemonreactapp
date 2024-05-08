import React from "react";

const Dropdown = ({ options, selectedValue, onChange, className, name }) => (
  <select
    className={`block appearance-none w-full bg-primaryColor border text-primaryTextColor border-borderColor hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline ${className}`}
    value={selectedValue}
    onChange={onChange}
  >
    {/* Default option */}
    <option value="">{name}</option>
    {/* Map through options array and render each option */}
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Dropdown;
