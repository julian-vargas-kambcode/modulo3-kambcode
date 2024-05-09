const axios = require('axios');

async function getPokemons() {
    try {
        // Obtener la información de los primeros 20 Pokémon
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        const pokemons = response.data.results;

        // Array para almacenar la información completa de cada Pokémon
        const fullPokemonData = [];

        // Obtener la información individual de cada Pokémon
        for (const pokemon of pokemons) {
            const pokemonResponse = await axios.get(pokemon.url);
            const pokemonData = pokemonResponse.data;
            fullPokemonData.push(pokemonData);
        }

        // Imprimir la información de los Pokémon
        console.log(fullPokemonData);
    } catch (error) {
        console.error("Hubo un error al obtener los Pokémon:", error);
    }
}

// Llamar a la función para obtener los Pokémon
getPokemons();

