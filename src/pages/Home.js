import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import PokemonCardList from "../components/PokemonCard/PokemonCardList";
import useFilteredPokemonCards from "../components/Sorter/useFilteredPokemonCards";
import Pagination from "../components/Pagination/Pagination";
import Dropdown from "../components/Sorter/Dropdown";
import Header from "../components/Header/Header";

const Home = () => {
  const { pokemonRarities, pokemonTypes, pokemonSets } =
    useContext(ShopContext);
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSet, setSelectedSet] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const filteredPokemonCards = useFilteredPokemonCards(
    selectedRarity,
    selectedType,
    selectedSet,
    searchQuery
  );

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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredPokemonCards.slice(
    firstPostIndex,
    lastPostIndex
  );

  return (
    <div className="min-h-screen bg-backgroundColor">
      <Header handleSearch={handleSearch} />
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white my-7">Choose Card</h1>
        </div>

        <div className="flex items-center ml-auto">
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
      <div className="container flex mx-auto">
        <PokemonCardList pokemonData={currentPosts} />
      </div>
      <div className="flex items-center justify-center w-screen mt-10">
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
