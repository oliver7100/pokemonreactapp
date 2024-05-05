// useFilteredPokemonCards.js
import { useState, useEffect } from "react";
import { fetchPokemonCards } from "../utils/api";

const useFilteredPokemonCards = (selectedRarity, selectedType, selectedSet) => {
  const [pokemonCards, setPokemonCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonCards();
        setPokemonCards(data.data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return pokemonCards.filter((card) => {
    const matchesRarity = !selectedRarity || card.rarity === selectedRarity;
    const matchesType = !selectedType || card.types.includes(selectedType);
    const matchesSet = !selectedSet || card.set.name === selectedSet;

    return matchesRarity && matchesType && matchesSet;
  });
};

export default useFilteredPokemonCards;
