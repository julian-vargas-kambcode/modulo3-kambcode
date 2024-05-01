const axios = require("axios");

async function obtenerInformacionPokemon(nombrePokemon) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener la información del Pokémon ${nombrePokemon}:`, error);
    return null;
  }
}

async function obtenerPrimeros20Pokemons() {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
    const pokemons = response.data.results;
    return pokemons;
  } catch (error) {
    console.error("Error al obtener la información de los primeros 20 Pokémon:", error);
    return [];
  }
}

async function main() {
  try {
    const primeros20Pokemons = await obtenerPrimeros20Pokemons();
    const pokemonsActualizados = [];

    console.log("Nombres de los primeros 20 Pokémon:");
    for (const pokemon of primeros20Pokemons) {
      console.log(pokemon.name); // Imprimir el nombre de cada Pokémon
      const nombrePokemon = pokemon.name;
      const informacionPokemon = await obtenerInformacionPokemon(nombrePokemon);

      if (informacionPokemon) {
        pokemonsActualizados.push(informacionPokemon);
      }
    }

    console.log("\nInformación completa de los primeros 20 Pokémon:");
    console.log(pokemonsActualizados);
  } catch (error) {
    console.error("Error al obtener y mostrar la información de los primeros 20 Pokémon:", error);
  }
}

main();