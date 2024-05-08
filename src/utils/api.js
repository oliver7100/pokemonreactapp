import axios from "axios";

// API key for authentication
const API_KEY = "22cadbb9-a43f-4186-af8a-463426a7ee43"; // Didnt create a .env file to simplify setup for users

// Base URL of the Pokémon TCG API
const BASE_URL = "https://api.pokemontcg.io/v2";

// Function to fetch data from the API
const fetchData = async (endpoint) => {
  try {
    // Making a GET request to the specified endpoint with Axios
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      headers: {
        "X-Api-Key": API_KEY, // Including API key in request headers for authentication
      },
    });
    // Returning the data received from the API
    return response.data.data;
  } catch (error) {
    // Handling errors if the request fails
    console.error(`Error fetching ${endpoint}:`, error);
    // Returning an empty array in case of error
    return [];
  }
};

// Functions to fetch specific types of data from the Pokémon TCG API
export const fetchPokemonCards = () => fetchData("cards"); // Fetch Pokémon cards data
export const fetchPokemonTypes = () => fetchData("types"); // Fetch Pokémon types data
export const fetchPokemonRarities = () => fetchData("rarities"); // Fetch Pokémon rarities data
export const fetchPokemonSets = () => fetchData("sets"); // Fetch Pokémon sets data
