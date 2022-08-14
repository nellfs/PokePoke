import theme from "../../styles/theme";

export type PokemonTypes = "fire" | "grass" | "water" | "fire";

export interface IPokemon {
  id: number;
  name: string;
  type: PokemonTypes;
  image: string;
}
