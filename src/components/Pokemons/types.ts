import theme from "../../styles/theme";

type PokemonType = {
  types: string;
};
export interface IPokemon {
  id: number;
  name: string;
  type: PokemonType;
  image: string;
}

export interface IPokemonTypes {
  eletric: string;
  grass: string;
  water: string;
  fire: string;
}
