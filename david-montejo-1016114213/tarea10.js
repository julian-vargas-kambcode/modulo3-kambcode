const axios = require('axios');

// Función para obtener la información de los primeros 20 Pokémon
async function getPokemonData() {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        const pokemonData = response.data.results;
        const pokemons = [];

        // Obtener la información de cada Pokémon individualmente
        for (const pokemon of pokemonData) {
            const pokemonResponse = await axios.get(pokemon.url);
            const pokemonInfo = {
                name: pokemon.name,
                data: pokemonResponse.data
            };
            pokemons.push(pokemonInfo);
        }

        console.log(pokemons);
        return pokemons;
    } catch (error) {
        console.error("Error al obtener la información de los Pokémon:", error);
    }
}

// Llamar a la función para obtener la información
getPokemonData();
