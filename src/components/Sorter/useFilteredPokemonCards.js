import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const useFilteredPokemonCards = (
  selectedRarity, // Selected rarity filter
  selectedType, // Selected type filter
  selectedSet, // Selected set filter
  searchQuery // Search query
) => {
  // Accessing pokemonCards data from the ShopContext
  const { pokemonCards } = useContext(ShopContext);

  // Filter the pokemonCards based on the selected criteria
  return pokemonCards.filter((card) => {
    // Check if the card matches the selected rarity, or if no rarity is selected
    const matchesRarity = !selectedRarity || card.rarity === selectedRarity;

    // Check if the card matches the selected type. If no type is selected, we use `includes` because `selectedType` is an array.
    // The data we receive is in arrays.
    const matchesType = !selectedType || card.types.includes(selectedType);

    const matchesSet = !selectedSet || card.set.name === selectedSet;

    // Check if the card's name matches the search query, or if no search query is provided
    const matchesSearch =
      !searchQuery ||
      card.name.toLowerCase().includes(searchQuery.toLowerCase());

    // Return true if all conditions are met, otherwise false
    return matchesRarity && matchesType && matchesSet && matchesSearch;
  });
};

export default useFilteredPokemonCards;
