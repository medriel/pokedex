import axios from 'axios';

const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 1000 * 4,
});

export { pokemonApi };
