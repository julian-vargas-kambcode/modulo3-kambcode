const axios  = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";
const pokemons = [];

function main() {
  axios
    .get(API)
    .then((response) => {
      pokemons.push(...response.data.results);
      //console.log(pokemons);
      const promesas = pokemons.map((pokemon) => {
        //elimina el campo url
        //delete pokemon.url;
        //console.log(pokemon);
        return axios.get(`${API}/${pokemon.name}`);
      });

      Promise.all(promesas).then((responses) => {
        
        const pokemonsSkills = pokemons.map((pokemon) => {
          const response = responses.find((response) => response.data.name === pokemon.name); //con esto se llaman los datos de todos los pokemons y se guardan
          return { ...pokemon, ...response.data };
        });

       console.log(pokemonsSkills);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

 main();