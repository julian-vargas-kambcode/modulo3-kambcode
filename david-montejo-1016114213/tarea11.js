const axios = require('axios');

async function getPokemons() {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        const pokemonList = response.data.results;
        return pokemonList;
    } catch (error) {
        console.error("Error al obtener la lista de Pokémon:", error);
    }
}

async function updatePokemonInfo(pokemonList) {
    const updatedPokemons = [];

    for (const pokemon of pokemonList) {
        try {
            const response = await axios.get(pokemon.url);
            const updatedPokemon = {
                name: pokemon.name,
                ...response.data
            };
            updatedPokemons.push(updatedPokemon);
        } catch (error) {
            console.error(`Error al obtener la información de ${pokemon.name}:`, error);
        }
    }

    return updatedPokemons;
}

async function main() {
    try {
        const pokemonList = await getPokemons();
        const updatedPokemons = await updatePokemonInfo(pokemonList);
        console.log(updatedPokemons);
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

main();
