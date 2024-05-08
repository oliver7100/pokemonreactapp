import React, { createContext, useState, useEffect } from "react";
import {
  fetchPokemonRarities,
  fetchPokemonTypes,
  fetchPokemonSets,
  fetchPokemonCards,
} from "../utils/api";
import LoadingScreen from "../components/Loading/LoadingScreen";

// Create a context for sharing data across components
export const ShopContext = createContext(null);

// Provider component for managing shop-related data
export const ShopContextProvider = (props) => {
  // State variables to store various shop-related data
  const [pokemonRarities, setPokemonRarities] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonSets, setPokemonSets] = useState([]);
  const [pokemonCards, setPokemonCards] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch shop data from API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch rarities, types, sets, and cards data
        const rarities = await fetchPokemonRarities();
        const types = await fetchPokemonTypes();
        const sets = await fetchPokemonSets();
        const cards = await fetchPokemonCards();

        // Update state variables with fetched data
        setPokemonRarities(rarities);
        setPokemonTypes(types);
        setPokemonSets(sets);
        setPokemonCards(cards);

        // Set default cart items and mark loading as false
        setCartItems(getDefaultCart(cards));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    // Call fetchData function when the component mounts
    fetchData();
  }, []);

  // Helper function to get the total price of an individual card in the cart
  const getTotalIndividualCardPrice = (cardId) => {
    // Find the card with the given ID
    const card = pokemonCards.find((pokemonCard) => pokemonCard.id === cardId);
    if (card) {
      // Calculate and return the total price for the card based on quantity in the cart
      return (
        cartItems[cardId] * card.cardmarket.prices.averageSellPrice
      ).toFixed(2);
    }
    return 0; // Return 0 if card not found
  };

  // Helper function to get the total price of all cards in the cart
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

  // Helper function to get the total number of cards in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalAmount += cartItems[item];
      }
    }
    return totalAmount;
  };

  // Helper function to set default cart items
  const getDefaultCart = (pokemonCards) => {
    let cart = {};
    for (let i = 0; i < pokemonCards.length; i++) {
      cart[pokemonCards[i].id] = 0; // Use card id as the key and set quantity to 0
    }
    return cart;
  };

  // Function to add a card to the cart
  const addtoCart = (card) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[card.id] = (updatedCart[card.id] || 0) + 1;
      console.log("Cart items after adding", updatedCart);
      return updatedCart;
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems((prevCartItems) => {
      const updatedCart = {};
      for (const key in prevCartItems) {
        updatedCart[key] = 0; // Reset quantity to zero for each item
      }
      return updatedCart;
    });
  };

  // Function to remove a card from the cart
  const removeFromCart = (card) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[card.id] > 0) {
        updatedCart[card.id]--;
      }
      return updatedCart;
    });
  };

  // Render loading screen if data is still being fetched
  if (loading) {
    return <LoadingScreen />;
  }

  // Create context value to be provided to consuming components
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

  // Log cart items and provide context value to consuming components
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
