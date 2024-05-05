import React from "react";

import PokemonCard from "./PokemonCard";

const PokemonCardList = ({ pokemonData }) => {
  return (
    <div className="grid grid-cols-6 gap-y-14">
      {pokemonData.map((card, index) => {
        return (
          <PokemonCard
            key={index}
            productname={card.name}
            price={
              card.cardmarket?.prices.averageSellPrice
                ? card.cardmarket.prices.averageSellPrice
                : "Not on sale"
            }
            amount={card.set.total}
            image={card.images.small}
          ></PokemonCard>
        );
      })}
    </div>
  );
};

export default PokemonCardList;
