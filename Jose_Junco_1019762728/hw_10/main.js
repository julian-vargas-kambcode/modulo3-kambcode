/////     EJERCICIO 1     /////

// const { default: axios } = require("axios");

const axios = require("axios");

const API = "https://pokeapi.co/api/v2/pokemon";

let primeros20Pokemons = [];

const tomarInfo = () => {
    axios.get(API)
    .then((resolve) => {
        while (primeros20Pokemons.length < 20) {
            let randNum = Math.round(Math.random() * 20);
            let nuevoPokemon = resolve.data.results[randNum];
            if (!primeros20Pokemons.find((element) => element === nuevoPokemon)){
                primeros20Pokemons.push(nuevoPokemon);
            };
                
        }
        
        const promesas = primeros20Pokemons.map((elemento) =>{
            return axios.get(`${API}/${elemento.name}`);
        });

        Promise.all(promesas).then((responses) => {
            
        console.log(responses);
            const pokemonsFull = primeros20Pokemons.map((elemento) =>{
                const respuesta = responses.find((respuesta) => respuesta.data.name === elemento.name);
                return { ...elemento, ...respuesta.data};
            });
            
            console.log("RESPUESTA FINAL: ", pokemonsFull);
        });
        primeros20Pokemons.forEach((elemento) => delete elemento.url);
        setTimeout(() => console.log(primeros20Pokemons), 2000);
    })
    .catch((error) => {
        console.log("Hubo un error:", error);
    })   
};

tomarInfo();

