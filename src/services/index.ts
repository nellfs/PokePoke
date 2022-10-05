const api_limit = 12;
const api_value = `https://pokeapi.co/api/v2/pokemon?limit=${api_limit}`;
const api_maxvalue = 898;

type pokemon_data = number | string;

export type Response<T> = {
  status: number;
  error?: string;
  data?: T;
};
export class PokeClient {
  basePath: string;
  constructor() {
    this.basePath = 'https://pokeapi.co/api/v2/';
  }

  async send<R>(url: RequestInfo, init?: RequestInit): Promise<Response<R>> {
    try {
      const response = await fetch(url, init);
      const data = await response.json();

      return {
        status: response.status,
        data,
      };
    } catch (e) {
      return {
        status: 500,
        error: `${e}`,
      };
    }
  }

  async get<R>(path: string): Promise<Response<R>> {
    const url = `${this.basePath}${path}`;
    const options: RequestInit = {
      method: 'GET',
    };

    return this.send(url, options);
  }

  getPokemonUrl = <pokemon_data>(pokemon: pokemon_data) => {
    return `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  };

  async getPokemonSpecies(pokemon: pokemon_data) {
    const response = await this.get(
      'https://pokeapi.co/api/v2/pokemon-species/' + pokemon
    );
    console.log(response);
  }

  async getEvolutionChain(pokemon: number) {
    const response = await this.get('evolution-chain/' + pokemon);
    console.log(response);
  }

  async getPokemon(pokemon: pokemon_data) {
    const response = await this.get('pokemon/' + pokemon);
    console.log(response.data);
  }
}

export default { PokeClient, api_limit, api_value, api_maxvalue };
