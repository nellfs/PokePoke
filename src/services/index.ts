import {
  IPokemonEvolutionChain,
  IPokemonSpecies,
} from '../types/Pokemons/types';

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

  async get<R>(path: string, useBasePath = true): Promise<Response<R>> {
    const url = `${useBasePath === true ? this.basePath + path : path}`;
    const options: RequestInit = {
      method: 'GET',
    };
    return this.send(url, options);
  }

  getPokemonUrl = <pokemon_data>(pokemon: pokemon_data) => {
    return `${this.basePath}pokemon/${pokemon}`;
  };

  async getPokemonSpecies(
    pokemon: pokemon_data
  ): Promise<Response<IPokemonSpecies>> {
    const response: Response<IPokemonSpecies> = await this.get(
      'pokemon-species/' + pokemon
    );
    return response;
  }

  async getPokemonEvolutionChain(
    pokemon: pokemon_data
  ): Promise<Response<IPokemonEvolutionChain>> {
    const species = await this.getPokemonSpecies(pokemon);
    const evolution_chain_url = species.data?.evolution_chain.url;
    const evolution_chain: Response<IPokemonEvolutionChain> = await this.get(
      `${evolution_chain_url}`,
      false
    );
    return evolution_chain;
  }

  async getEvolutionChain(pokemon: number) {
    const response = await this.get('evolution-chain/' + pokemon);
    console.log(response);
  }

  // async getTypes(pokemon: pokemon_data) {
  //   const response = await this.get('pokemon');
  // }

  async getPokemon(pokemon: pokemon_data) {
    const response = await this.get('pokemon/' + pokemon);
    console.log(response.data);
  }
}

export default { PokeClient, api_limit, api_value, api_maxvalue };
