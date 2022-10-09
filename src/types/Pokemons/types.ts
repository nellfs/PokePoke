export type PokemonTypes = {
  type: {
    name:
      | 'bug'
      | 'dark'
      | 'dragon'
      | 'electric'
      | 'fairy'
      | 'fighting'
      | 'fire'
      | 'flying'
      | 'ghost'
      | 'grass'
      | 'ground'
      | 'ice'
      | 'normal'
      | 'poison'
      | 'psychic'
      | 'rock'
      | 'steel'
      | 'water';
  };
};

export interface IPokemon {
  id: number;
  name: string;
  types: PokemonTypes[];
  image_id?: number;
}

export interface IPokemonDetails extends IPokemon {
  height: number;
  weight: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    especial_attack: number;
    especial_defense: number;
    speed: number;
  };
}

export interface IPokemonSpecies {
  evolution_chain: {
    url: string;
  };
}

export interface IPokemonEvolutionChain {
  chain: {
    species: {
      name: string;
    };
  };
}
