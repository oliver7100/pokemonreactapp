import React, { createContext, useState, useEffect } from "react";
import {
  fetchPokemonRarities,
  fetchPokemonTypes,
  fetchPokemonSets,
  fetchPokemonCards,
} from "../utils/api";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [pokemonRarities, setPokemonRarities] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonSets, setPokemonSets] = useState([]);
  const [pokemonCards, setPokemonCards] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rarities = await fetchPokemonRarities();
        const types = await fetchPokemonTypes();
        const sets = await fetchPokemonSets();
        const cards = await fetchPokemonCards();
        setPokemonRarities(rarities);
        setPokemonTypes(types);
        setPokemonSets(sets);
        setPokemonCards(cards.data);
        setCartItems(getDefaultCart(cards.data));
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  const getDefaultCart = (pokemonCards) => {
    let cart = {};
    for (let i = 0; i < pokemonCards.length; i++) {
      cart[pokemonCards[i].id] = 0; // Use card id as the key
    }
    return cart;
  };

  const addtoCart = (card) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[card.id] = (updatedCart[card.id] || 0) + 1;
      console.log("Cart items after adding", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (card) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[card.id] > 0) {
        updatedCart[card.id]--;
      }
      return updatedCart;
    });
  };

  const contextValue = {
    pokemonRarities,
    pokemonTypes,
    pokemonSets,
    pokemonCards,
    cartItems,
    addtoCart,
    removeFromCart,
  };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
