const api_limit = 18;
const api_value = `https://pokeapi.co/api/v2/pokemon?limit=${api_limit}`;
const api_maxvalue = 898;

export class PokeClient {
  getPokemonUrl = (pokemon: string | number) => {
    return `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  };

  async getPokemon(pokemon: string | number) {
    fetch(this.getPokemonUrl(pokemon)).then((response) => response.json());
  }
}

export default { PokeClient, api_limit, api_value, api_maxvalue };
