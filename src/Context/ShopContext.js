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
      } catch (error) {}
    };

    fetchData();
  }, []);

  const getTotalIndividualCardPrice = (cardId) => {
    const card = pokemonCards.find((pokemonCard) => pokemonCard.id === cardId);
    if (card) {
      return (
        cartItems[cardId] * card.cardmarket.prices.averageSellPrice
      ).toFixed(2);
    }
    return 0; // Return 0 if card not found
  };

  const getTotalCartPrice = () => {
    let totalPrice = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const card = pokemonCards.find(
          (pokemonCard) => pokemonCard.id === item
        );
        if (card) {
          totalPrice +=
            cartItems[item] * card.cardmarket.prices.averageSellPrice;
        }
      }
    }
    return totalPrice.toFixed(2); // Return total price rounded to 2 decimal places
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalAmount += cartItems[item];
      }
    }
    return totalAmount;
  };

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

  const clearCart = () => {
    setCartItems((prevCartItems) => {
      const updatedCart = {};
      for (const key in prevCartItems) {
        updatedCart[key] = 0; // Reset quantity to zero for each item
      }
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
    getTotalCartAmount,
    getTotalCartPrice,
    clearCart,
    getTotalIndividualCardPrice,
  };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
