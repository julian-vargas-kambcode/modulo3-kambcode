const { default: axios } = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

function principal() {
  const Pokemons = [];

  axios
    .get(API)
    .then((respuesta) => {
      // Utilizamos el operador de propagación (...) para agregar los resultados al array Pokemons
      Pokemons.push(...respuesta.data.results);

      // Mapeamos cada Pokémon para obtener su información individual
      const promesas = Pokemons.map((pokemon) => {
        return axios.get(`${API}/${pokemon.name}`);
      });
      Promise.all(promesas)
        .then((respuestas) => {
          const pokemonsFull = Pokemons.map((pokemon, index) => {
            const response = respuestas[index];

            return { ...pokemon, ...response.data };
          });

          console.log("RESPUESTA FINAL: ", pokemonsFull);
        })
        .catch((error) => {
          console.log("Error al obtener la información completa de los Pokémon:", error);
        });
    })
    .catch((error) => {
      console.log("Error al obtener los primeros 20 Pokémon:", error);
    });
}

principal();