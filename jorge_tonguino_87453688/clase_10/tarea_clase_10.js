const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

async function getPokemons() {
  try {
    const response = await axios.get(`${API}?limit=20`);
    const pokemons = response.data.results;
    return pokemons;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
}

async function getIndividualPokemonInfo(pokemonName) {
  try {
    const response = await axios.get(`${API}/${pokemonName}`);
    const pokemonInfo = response.data;
    console.log("Información de", pokemonName + ":");
    console.log(pokemonInfo);
  } catch (error) {
    console.error("Error al obtener información de", pokemonName + ":", error);
  }
}

async function main() {
  const pokemons = await getPokemons();
  console.log("Lista de los primeros 20 Pokémon:");
  console.log(pokemons);
  
  for (let i = 0; i < pokemons.length; i++) {
    await getIndividualPokemonInfo(pokemons[i].name);
  }
}

main();