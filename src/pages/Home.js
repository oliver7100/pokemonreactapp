import React, { useState, useEffect } from "react";
import {
  fetchPokemonRarities,
  fetchPokemonTypes,
  fetchPokemonSets,
} from "../components/utils/api";
import PokemonCardList from "../components/PokemonCard/PokemonCardList";
import Pagination from "../components/Pagination/Pagination";
import {
  RaritySelect,
  TypeSelect,
  SetSelect,
} from "../components/Sorter/SorterComponents";
import useFilteredPokemonCards from "../components/Sorter/useFilteredPokemonCards";

const Home = () => {
  const [pokemonRarities, setPokemonRarities] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonSets, setPokemonSets] = useState([]);
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedSet, setSelectedSet] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rarities = await fetchPokemonRarities();
        const types = await fetchPokemonTypes();
        const sets = await fetchPokemonSets();
        setPokemonRarities(rarities);
        setPokemonTypes(types);
        setPokemonSets(sets);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

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
