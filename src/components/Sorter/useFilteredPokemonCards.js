import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const useFilteredPokemonCards = (selectedRarity, selectedType, selectedSet) => {
  const { pokemonCards } = useContext(ShopContext);

  return pokemonCards.filter((card) => {
    const matchesRarity = !selectedRarity || card.rarity === selectedRarity;
    const matchesType = !selectedType || card.types.includes(selectedType);
    const matchesSet = !selectedSet || card.set.name === selectedSet;

    return matchesRarity && matchesType && matchesSet;
  });
};

export default useFilteredPokemonCards;
