const API_URL = 'https://pokeapi.co/api/v2/pokemon';
let pokemonData = [];

async function fetchPokemonData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

async function getPokemons() {
  try {
    const response = await fetchPokemonData(`${API_URL}?limit=20`);
    pokemonData = response.results;
    displayPokemons(pokemonData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

function displayPokemons(pokemons) {
  const pokemonList = document.getElementById('pokemon-list');
  pokemonList.innerHTML = '';
  pokemons.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('card');
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`;
    card.innerHTML = `
      <img src="${imageUrl}" alt="${pokemon.name}">
      <h3>${pokemon.name}</h3>
      <p>Number: ${pokemon.url.split('/')[6]}</p>
      <p>Weight: ${Math.floor(Math.random() * 100)} kg</p>
      <p>Height: ${Math.floor(Math.random() * 10)} m</p>
    `;
    pokemonList.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getPokemons();

  document.getElementById('filter-number').addEventListener('click', () => {
    pokemonData.sort((a, b) => parseInt(a.url.split('/')[6]) - parseInt(b.url.split('/')[6]));
    displayPokemons(pokemonData);
  });

  document.getElementById('filter-name').addEventListener('click', () => {
    pokemonData.sort((a, b) => a.name.localeCompare(b.name));
    displayPokemons(pokemonData);
  });

  document.getElementById('filter-weight').addEventListener('click', () => {
    pokemonData.sort((a, b) => Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100));
    displayPokemons(pokemonData);
  });

  document.getElementById('filter-height').addEventListener('click', () => {
    pokemonData.sort((a, b) => Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10));
    displayPokemons(pokemonData);
  });
});
