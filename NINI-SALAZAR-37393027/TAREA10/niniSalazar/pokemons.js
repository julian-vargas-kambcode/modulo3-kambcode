const axios = require("axios");

const API_pok = "https://pokeapi.co/api/v2/pokemon";


function Principal() {
    const ArrayPokemon = [];
    axios
        .get(API_pok)
        .then((response) => {
            ArrayPokemon.push(...response.data.results);//devuelve 20 pokemons
            const promises = ArrayPokemon.map((pokemon) => {
                return axios.get(`${API_pok}/${pokemon.name}`);
            });
            Promise.all(promises).then((responses) => {
                const pokemonsTotal = ArrayPokemon.map((pokemon) => {
                    const response = responses.find(
                        (response) => response.data.name=== pokemon.name
                    );
                    return { ...pokemon, ...response.data};
                });
                console.log("20 POKEMONES CON SU DATA", pokemonsTotal);
            });
        })

        .catch((error) => {
            console.error("error", error);
        });

}
Principal();