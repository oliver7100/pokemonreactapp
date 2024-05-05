import axios from "axios";

const API_KEY = "22cadbb9-a43f-4186-af8a-463426a7ee43";
const BASE_URL = "https://api.pokemontcg.io/v2";

//GET request for all the pokemon cards
export const fetchPokemonCards = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cards`, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

//GET request for pokemon types
export const fetchPokemonTypes = async () => {
  try {
    const response = await axios.get("https://api.pokemontcg.io/v2/types", {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Pokemon types:", error);
    return [];
  }
};

//GET request for pokemon rarities
export const fetchPokemonRarities = async () => {
  try {
    const response = await axios.get("https://api.pokemontcg.io/v2/rarities", {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Pokemon rarities:", error);
    return [];
  }
};

//GET request for pokemon rarities
export const fetchPokemonSets = async () => {
  try {
    const response = await axios.get("https://api.pokemontcg.io/v2/sets", {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Pokemon sets:", error);
    return [];
  }
};
