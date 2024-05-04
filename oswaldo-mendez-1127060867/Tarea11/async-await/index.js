const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

async function main() {
  const response = await axios.get(API);

  const arrayPromises = response.data.results.map((pokemon) => {
    //console.log(pokemon.name);
    return axios.get(`${API}/${pokemon.name}`);
  });
  //console.log(arrayPromises);

  const responses = await Promise.all(arrayPromises);
    const pokemonsSkills = response.data.results.map((pokemon) => {
      const response = responses.find((response) => response.data.name === pokemon.name); //con esto se llaman los datos de todos los pokemons y se guardan
      return { ...pokemon, ...response.data };
    });
  console.log(pokemonsSkills);
}

main();
