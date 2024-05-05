import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import {
  RaritySelect,
  TypeSelect,
  SetSelect,
} from "../components/Sorter/SorterComponents";
import PokemonCardList from "../components/PokemonCard/PokemonCardList";
import useFilteredPokemonCards from "../components/Sorter/useFilteredPokemonCards";
import Pagination from "../components/Pagination/Pagination";
import Cart from "./Cart";

const Home = () => {
  const { pokemonRarities, pokemonTypes, pokemonSets } =
    useContext(ShopContext);
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSet, setSelectedSet] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const filteredPokemonCards = useFilteredPokemonCards(
    selectedRarity,
    selectedType,
    selectedSet
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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredPokemonCards.slice(
    firstPostIndex,
    lastPostIndex
  );

  return (
    <div className="bg-backgroundColor">
      <Cart></Cart>
      <h1 className="text-white">Choose Card</h1>
      <div>
        <RaritySelect
          rarities={pokemonRarities}
          selectedRarity={selectedRarity}
          onRarityChange={handleRarityChange}
        />
        <TypeSelect
          types={pokemonTypes}
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
        />
        <SetSelect
          sets={pokemonSets}
          selectedSet={selectedSet}
          onSetChange={handleSetChange}
        />
      </div>
      <PokemonCardList pokemonData={currentPosts} />
      <div className="flex items-center justify-center w-screen">
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
