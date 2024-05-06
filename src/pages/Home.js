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
import { Modal } from "../components/Modal/Modal";

const Home = () => {
  const { pokemonRarities, pokemonTypes, pokemonSets } =
    useContext(ShopContext);
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSet, setSelectedSet] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white my-7">Choose Card</h1>
        </div>

        <div className="flex items-center ml-auto">
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
      </div>
      <div className="container flex mx-auto">
        <PokemonCardList pokemonData={currentPosts} />
      </div>
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
