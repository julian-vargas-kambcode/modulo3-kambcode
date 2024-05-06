const axios = require("axios");

const API_URL = "https://pokeapi.co/api/v2/pokemon";
let pokemons = [];

async function obtenerPokemons() {
  try {
    const response = await axios.get(`${API_URL}?limit=20`);
    pokemons = response.data.results.map(pokemon => ({ name: pokemon.name }));

    const pokemonPromises = pokemons.map(pokemon =>
      axios.get(`${API_URL}/${pokemon.name}`).then(res => res.data)
    );

    const pokemonData = await Promise.all(pokemonPromises);

    pokemons.forEach((pokemon, index) => {
      pokemon.info = pokemonData[index];
    });

    console.log("Pokemons obtenidos y actualizados:", pokemons);
  } catch (error) {
    console.error("Error al obtener información de los Pokémon:", error);
  }
}

obtenerPokemons();