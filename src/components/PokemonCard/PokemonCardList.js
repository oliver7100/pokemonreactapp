import React from "react";

import PokemonCard from "./PokemonCard";

const PokemonCardList = ({ pokemonData }) => {
  return (
    // Grid layout for displaying Pokemon cards
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-14">
      {/* Mapping through each Pokemon card data and rendering PokemonCard component */}
      {pokemonData.map((card, index) => {
        return (
          <PokemonCard
            key={index} // Unique key for each Pokemon card
            id={card.id} // ID of the card
            productname={card.name} // Name of the card
            price={
              // Price of the card, defaults to "Not on sale" if price data is not available in the API the data was sometimes not available
              card.cardmarket?.prices.averageSellPrice
                ? card.cardmarket.prices.averageSellPrice
                : "Not on sale"
            }
            amount={card.set.total} // Total number of cards in the set
            image={card.images.small} // URL of the card image
          ></PokemonCard>
        );
      })}
    </div>
  );
};

export default PokemonCardList;
