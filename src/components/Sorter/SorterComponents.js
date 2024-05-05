import React from "react";

export const RaritySelect = ({ rarities, selectedRarity, onRarityChange }) => (
  <select value={selectedRarity} onChange={onRarityChange}>
    <option value="">Select a rarity</option>
    {rarities.map((rarity, index) => (
      <option key={index} value={rarity}>
        {rarity}
      </option>
    ))}
  </select>
);

export const SetSelect = ({ sets, selectedSet, onSetChange }) => (
  <select value={selectedSet} onChange={onSetChange}>
    <option value="">Select a set</option>
    {sets.map((set, index) => (
      <option key={index} value={set.name}>
        {set.name}
      </option>
    ))}
  </select>
);

export const TypeSelect = ({ types, selectedType, onTypeChange }) => (
  <select value={selectedType} onChange={onTypeChange}>
    <option value="">Select a type</option>
    {types.map((type, index) => (
      <option key={index} value={type}>
        {type}
      </option>
    ))}
  </select>
);
