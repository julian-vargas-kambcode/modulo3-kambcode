
const axios = require("axios");

function main() {
    let pokemon = [];
    axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
        for(let i = 0; i < 20; i++){
            const namePokemon = response.data.results[i].name;
            pokemon.push({name: namePokemon});
            axios.get(`"https://pokeapi.co/api/v2/pokemon"/${namePokemon}`);
            pokemon.push({ name: namePokemon, ...response.data });
        }
        console.log(pokemon);
    })
        .catch((error) => {
        console.error("error: ", error);
        });
        
}

main();