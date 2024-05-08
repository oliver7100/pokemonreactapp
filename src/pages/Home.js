import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import PokemonCardList from "../components/PokemonCard/PokemonCardList";
import useFilteredPokemonCards from "../components/Sorter/useFilteredPokemonCards";
import Pagination from "../components/Pagination/Pagination";
import Dropdown from "../components/Sorter/Dropdown";
import Header from "../components/Header/Header";

const Home = () => {
  // Context and State variables
  const { pokemonRarities, pokemonTypes, pokemonSets } =
    useContext(ShopContext);
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSet, setSelectedSet] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  // Filtering logic
  const filteredPokemonCards = useFilteredPokemonCards(
    selectedRarity,
    selectedType,
    selectedSet,
    searchQuery
  );

  // Event handlers
  const handleRarityChange = (event) => {
    setSelectedRarity(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSetChange = (event) => {
    setSelectedSet(event.target.value);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Pagination logic
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredPokemonCards.slice(
    firstPostIndex,
    lastPostIndex
  );

  return (
    <div className="min-h-screen bg-backgroundColor">
      {/* Header component for search */}
      <Header handleSearch={handleSearch} />

      {/* Dropdowns for filtering */}
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row mb-7">
        <h1 className="text-xl font-bold text-white my-7 md:my-0">
          Choose Card
        </h1>
        <div className="flex items-center mt-4 md:mt-0">
          <Dropdown
            name="Rarities"
            options={pokemonRarities}
            selectedValue={selectedRarity}
            onChange={handleRarityChange}
            className="mr-4"
          />
          <Dropdown
            name={"Types"}
            options={pokemonTypes}
            selectedValue={selectedType}
            onChange={handleTypeChange}
            className="mr-4"
          />
          <Dropdown
            name={"Sets"}
            options={pokemonSets.map((set) => set.name)}
            selectedValue={selectedSet}
            onChange={handleSetChange}
          />
        </div>
      </div>

      {/* Displaying filtered Pokémon cards */}
      <div className="container flex justify-center mx-auto ">
        <PokemonCardList pokemonData={currentPosts} />
      </div>

      {/* Pagination component */}
      <div className="flex items-center justify-center mt-10">
        <Pagination
          totalPosts={filteredPokemonCards.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;
